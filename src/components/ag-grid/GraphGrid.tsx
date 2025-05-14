/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, CSSProperties, ReactNode } from 'react';
import {
  CellValueChangedEvent,
  ColDef,
  ColGroupDef,
  ColumnMovedEvent,
  ColumnPinnedEvent,
  ColumnResizedEvent,
  ColumnState,
  ColumnStateParams,
  ColumnVisibleEvent,
  ExcelExportParams,
  FilterChangedEvent,
  GetRowIdFunc,
  GridApi,
  GridReadyEvent,
  ICellRendererParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  IServerSideGetRowsRequest,
  LoadSuccessParams,
  ModuleRegistry,
  SortChangedEvent,
  SortModelItem,
  ValueFormatterParams,
} from '@ag-grid-community/core';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { MutationOptions, QueryOptions } from '@apollo/client';
import { t } from '@lingui/core/macro';
import dayjs from 'dayjs';
import { cloneDeep, map, set } from 'lodash';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';

import { DateTimeCellEditor } from '@/components/ag-grid/CellEditor';
import ServerSideTotalPanel from '@/components/ag-grid/ServerSideTotalPanel';
import { LoanRegular, SortDirection } from '@/gql/graphql';
import { excelStyles, filterOptions, getClipboardValue, processCellForClipboard as gc } from '@/utils/helpers';
import { apolloClient } from '@/utils/providers/ApolloWrapper';
import storage from '@/utils/storage';

import { ImagePreviewCell } from './cell';
import { CheckCell } from './cell/CheckCell';
import { ColumnType, columnTypes } from './columnTypes';
import { BoolFilter, BoolFilterComponent } from './filter/BoolFilter';
import { GridStyle } from './Grid.style';
import IdRenderer from './IdRenderer';

ModuleRegistry.registerModules([ColumnsToolPanelModule]);

ModuleRegistry.registerModules([
  StatusBarModule,
  ClipboardModule,
  ExcelExportModule,
  RangeSelectionModule,
  SetFilterModule,
  ServerSideRowModelModule,
  MenuModule,
  RichSelectModule,
  RowGroupingModule,
]);
const comparator: Record<string, string> = {
  contains: 'cont',
  equals: 'eq',
  notEqual: 'notEq',
  startsWith: 'start',
  endsWith: 'end',
  isEmpty: 'blank',
  empty: 'blank',
  lessThan: 'lt',
  greaterThan: 'gt',
  inRange: 'gteq',
  lessThanOrEqual: 'lteq',
  greaterThanOrEqual: 'gteq',
  null: 'null',
  '': 'notNull',
};
type GraphDataSourceProps = {
  api: GridApi;
  columns: Array<GraphColDef>;
} & Pick<GraphGridProps, 'graphQuery' | 'parseResponse' | 'keyMap' | 'cacheBlockSize'>;

export class GraphDataSource implements IServerSideDatasource {
  keyMap: Record<string, string>;
  gridOptions: Omit<GraphDataSourceProps, 'keyMap'>;
  total?: number;

  constructor({ keyMap, ...rest }: GraphDataSourceProps) {
    this.gridOptions = rest;
    this.keyMap = keyMap || {};
  }

  convertKey(key: string) {
    if (this.keyMap[key]) return this.keyMap[key];
    return key;
  }

  getRows(params: IServerSideGetRowsParams) {
    apolloClient
      .query(
        this.gridOptions.graphQuery(
          params.request,
          this.getFilters(params.request.filterModel),
          this.getSort(params.request.sortModel),
          this.filteredColumns(),
        ),
      )
      .then((response) => {
        const { rows, total } = this.gridOptions.parseResponse(response);
        if (total) this.total = total;
        if (rows.length === 0) return params.success({ rowData: [], rowCount: 0 });
        params.success({ rowData: cloneDeep(rows), rowCount: this.total || 0 });
      })
      .catch(() => params.fail());
  }

  filteredColumns() {
    const { api, columns } = this.gridOptions;
    const graphFields: Array<string> = [];
    api.getColumnState().forEach((x) => {
      if (x.hide) return;
      const columnDef = columns.find((col) => 'field' in col && col.field === x.colId);
      if (!columnDef || ('hide' in columnDef && columnDef.hide)) return;
      if (columnDef && 'graph' in columnDef && columnDef.graph === false) return;
      if ('graph' in columnDef && columnDef.graph) graphFields.push(columnDef.graph);
      else graphFields.push(x.colId);
    });
    return graphFields;
  }

  getSort(sortModel: Array<SortModelItem>) {
    if (sortModel.length === 0) return;
    return { field: this.convertKey(sortModel[0].colId), direction: sortModel[0].sort as SortDirection };
  }

  getFilters(filters: IServerSideGetRowsRequest['filterModel']) {
    const query = {};
    map(filters, ({ filter, type, filterType, values, dateFrom, dateTo, filterTo, value }, key: string) => {
      if (filterType === 'text' && type === 'inList') {
        set(query, `${this.convertKey(key)}.in`, filter.split(/,|\s/));
      } else if (['text', 'number'].includes(filterType)) {
        if (type === 'inRange') {
          set(query, `${this.convertKey(key)}.gteq`, filter);
          set(query, `${this.convertKey(key)}.lteq`, filterTo);
        } else if (type === 'null') {
          set(query, `${this.convertKey(key)}.null`, filter === '1');
        } else if (type === 'bool_str') {
          set(query, `${this.convertKey(key)}.eq`, filter);
        } else {
          const comp = comparator[type];
          if (['blank', 'null', 'notNull'].includes(comp)) {
            set(query, `${this.convertKey(key)}.${comp}`, true);
          } else {
            set(query, `${this.convertKey(key)}.${comp}`, filter);
          }
        }
      }
      if (filterType === 'set') {
        if (values.length > 0) {
          set(query, `${this.convertKey(key)}.in`, values);
        } else set(query, `${this.convertKey(key)}.null`, true);
        // query[`${this.convertKey(key)}`] = { null: true };
      }
      if (type === 'bool') {
        set(query, this.convertKey(key), { eq: value });
      }

      if (filterType === 'raw') {
        Object.entries(filter).forEach(([k, v]) => {
          set(query, k, v);
        });
      }
      if (filterType === 'date') {
        if (type === 'inRange') {
          set(query, this.convertKey(key), {
            gteq: dateFrom,
            lteq: dateTo,
          });
        } else if (type === 'lessThan') {
          set(query, this.convertKey(key), { lt: dateFrom });
        } else if (type === 'greaterThan') {
          set(query, this.convertKey(key), { gt: dateFrom });
        } else if (type === 'greaterThanOrEqual') {
          set(query, this.convertKey(key), { gteq: dateFrom });
        } else if (type === 'lessThanOrEqual') {
          set(query, this.convertKey(key), { lteq: dateFrom });
        } else if (type === 'equals') {
          set(query, this.convertKey(key), {
            gteq: dayjs(dateFrom).startOf('day').toDate(),
            lteq: dayjs(dateFrom).endOf('day').toDate(),
          });
        }
      }
    });
    return query;
  }
}

type CleanColDef<T> = Omit<ColDef<T>, 'cellRenderer' | 'valueFormatter'>;

export type GraphColDef<T = any> =
  | ColGroupDef<T>
  | ((IDFieldDef<T> | CleanColDef<T>) & {
      graph?: string | false;
      type?: ColumnType | ColumnType[];
      cellRenderer?: string | ((params: ICellRendererParams) => ReactNode);
      valueFormatter?: (params: ValueFormatterParams) => string;
    });

export interface IDFieldDef<T> extends CleanColDef<T> {
  type: 'id';
  cellRendererParams?: {
    link?: (data: T | any) => string | ReactNode;
    onClick?: (data: T | any) => void;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyJSON = Record<string, any>;

export type GraphQuery = (
  request: IServerSideGetRowsRequest,
  filter: AnyJSON,
  sort: { field: string; direction: SortDirection } | undefined,
  columns: Array<string>,
) => QueryOptions;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface GraphGridProps extends AgGridReactProps {
  containerClass?: string;
  style?: CSSProperties;
  colState?: string;
  keyMap?: Record<string, string>;
  updateKeyMap?: Record<string, string>;
  columnDefs: Array<GraphColDef>;
  updateQuery?: (variables: AnyJSON) => MutationOptions | undefined;
  graphQuery: GraphQuery;
  parseResponse: (data: AnyJSON) => { rows: Array<any>; total?: number };
  refetchRef?: React.MutableRefObject<(() => void) | undefined>;
}

const getRowId: GetRowIdFunc = ({ data }) => data.id;

export default class GraphGrid extends Component<GraphGridProps, unknown> {
  unmounted?: boolean;
  selfProps: AgGridReactProps = {};
  columnDefs: AgGridReactProps['columnDefs'];
  components: AgGridReactProps['components'];
  api: GridApi;
  current: any;
  // columnApi: any;

  constructor(props: GraphGridProps) {
    super(props);
    if (props.colState) {
      this.selfProps = {
        onColumnVisible: this.saveGridState,
        onColumnPinned: this.saveGridState,
        onColumnResized: this.saveGridState,
        onColumnMoved: this.saveGridState,
      };
    }

    this.api = {} as GridApi;
    window.agGridApi = this.api;

    this.columnDefs = props.columnDefs.map((item) => {
      if ('editable' in item && item.editable) item.suppressPaste = false;
      if ('graph' in item) {
        const { graph, ...opts } = item;
        return opts;
      } else return item;
    });

    this.components = {
      loadingRenderer: IdRenderer,
      check: CheckCell,
      boolFilter: BoolFilter,
      boolFilterComponent: BoolFilterComponent,
      serverSideTotalPanel: ServerSideTotalPanel,
      dateTimeCellEditor: DateTimeCellEditor,
      image: ImagePreviewCell,
      ...props.components,
    };
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  fullExport = ({
    excelParams,
    perPage = 20,
    onProgress,
  }: {
    excelParams?: ExcelExportParams;
    perPage?: number;
    onProgress?: (progress: number) => void;
  }) => {
    const api = this.api;
    const oldSource = api.getGridOption('serverSideDatasource') as GraphDataSource;
    const rows: LoanRegular[] = [];

    api.setGridOption('serverSideDatasource', {
      getRows: async (params: IServerSideGetRowsParams) => {
        const pages = Math.ceil((oldSource.total || 1) / perPage);

        for (let page = 0; page < pages; page++) {
          await new Promise((resolve, reject) => {
            oldSource.getRows({
              ...params,
              request: { ...params.request, startRow: page * perPage, endRow: (page + 1) * perPage, sortModel: [] },
              success(par: LoadSuccessParams) {
                onProgress?.(Math.ceil((page / pages) * 100));
                rows.push(...par.rowData);
                resolve(1);
              },
              fail: () => reject(),
            });
          });
        }
        onProgress?.(0);
        // setProgress(0);
        params.success({ rowData: rows, rowCount: rows.length });
        setTimeout(() => {
          api.exportDataAsExcel(excelParams);
          api.setGridOption('serverSideDatasource', oldSource);
        }, 100);
      },
    });
  };

  onSortChanged = ({ api }: SortChangedEvent) => {
    if (this.unmounted) return;
    const sortedColumns = api.getColumnState().filter((x) => x.sort);
    if (sortedColumns.length > 0) {
      const sortHash = sortedColumns.reduce((hash, col) => {
        hash[col.colId] = col.sort;
        return hash;
      }, {} as AnyJSON);
      this.addQueryParam('sm', sortHash);
    } else {
      this.addQueryParam('sm');
    }
  };

  onFilterChanged = ({ api }: FilterChangedEvent) => {
    if (this.unmounted) return;
    const filterState = api.getFilterModel();
    if (Object.keys(filterState).length > 0) {
      this.addQueryParam('fm', filterState);
    } else {
      this.addQueryParam('fm');
    }
  };
  addQueryParam = (key: string, value?: string | object) => {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, typeof value === 'string' ? value : JSON.stringify(value));
    } else {
      url.searchParams.delete(key);
    }
    window.history.replaceState({}, '', url.toString());
  };
  getSearchParam = (key: string) => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  };

  onGridReadyCB = (gridReadyEvent: GridReadyEvent) => {
    const { api } = gridReadyEvent;
    this.api = api;
    if (this.unmounted) return;
    window.agGridApi = api;
    const filterModel = this.getSearchParam('fm');
    if (filterModel) {
      api.setFilterModel(JSON.parse(filterModel));
      window.agGridApi.setFilterModel(JSON.parse(filterModel));
    }

    const savedColState = this.props.colState ? storage.getItem(this.props.colState) : undefined;
    const sortModel = this.getSearchParam('sm');
    if (sortModel) {
      const sortHash = JSON.parse(sortModel) as AnyJSON;
      if (savedColState) {
        const mergedState = savedColState.map((x: ColumnState) => ({
          ...x,
          sort: sortHash[x.colId] || null,
        }));
        api.applyColumnState({ state: mergedState, applyOrder: true, defaultState });
      } else {
        api.applyColumnState({
          state: Object.entries(sortHash).map(([colId, sort]) => ({ colId, sort })),
          applyOrder: true,
          defaultState,
        });
      }
    } else api.applyColumnState({ state: savedColState, applyOrder: true, defaultState });

    // api.setServerSideDatasource(
    //   new GraphDataSource({
    //     keyMap: this.props.keyMap,
    //     graphQuery: this.props.graphQuery,
    //     parseResponse: this.props.parseResponse,
    //     columns: this.props.columnDefs,
    //     api,
    //     cacheBlockSize: this.props.cacheBlockSize,
    //   }),
    // );
    api.setGridOption(
      'serverSideDatasource',
      new GraphDataSource({
        keyMap: this.props.keyMap,
        graphQuery: this.props.graphQuery,
        parseResponse: this.props.parseResponse,
        columns: this.props.columnDefs,
        api,
        cacheBlockSize: this.props.cacheBlockSize,
      }),
    );
    if (this.props.onGridReady) this.props.onGridReady(gridReadyEvent);
  };

  onCellValueChanged = ({ oldValue, newValue, data, colDef }: CellValueChangedEvent) => {
    const { updateQuery, updateKeyMap } = this.props;
    if (!updateQuery || this.unmounted) return;
    if (oldValue === newValue || (oldValue === null && (newValue === '' || newValue === undefined))) return;
    const mutationObject = updateQuery({
      id: data.id,
      [updateKeyMap?.[colDef.field!] || colDef.field!]: newValue,
    });
    if (!mutationObject) return;
    apolloClient.mutate(mutationObject).catch(() => {
      /*ignore*/
    });
  };

  saveGridState = ({ api }: ColumnVisibleEvent | ColumnPinnedEvent | ColumnResizedEvent | ColumnMovedEvent) => {
    if (!this.props.colState) return;
    const columnStateSortExcluded = api.getColumnState().map(({ ...restState }) => restState);
    storage.setItem(this.props.colState, columnStateSortExcluded);
  };

  render() {
    const { columnDefs, colState, components, containerClass, keyMap, graphQuery, parseResponse, style, updateQuery, ...rest } =
      this.props;

    return (
      <GridStyle className={`ag-theme-balham ${containerClass}`} style={style}>
        <AgGridReact
          className="dark:bg-gray-800 bg-white"
          rowHeight={60}
          getRowId={getRowId}
          onFilterChanged={this.onFilterChanged}
          components={this.components}
          onCellValueChanged={this.onCellValueChanged}
          onSortChanged={this.onSortChanged}
          statusBar={statusBar}
          excelStyles={excelStyles}
          columnTypes={columnTypes}
          localeText={{ empty: 'Empty', isEmpty: 'isEmpty?', inList: 'inList' }}
          cellSelection
          columnDefs={this.columnDefs}
          serverSideInitialRowCount={20}
          rowModelType="serverSide"
          suppressNoRowsOverlay={true}
          // frameworkComponents={{ noRowsOverlay: NoRowsOverlayComponent }}
          // serverSideStoreType="partial"
          maxConcurrentDatasourceRequests={1}
          blockLoadDebounceMillis={1000}
          paginationPageSize={20}
          paginationPageSizeSelector={[20, 50, 100, 500, 1000]}
          pagination={true}
          noRowsOverlayComponent={noRowsOverlayComponent}
          {...this.selfProps}
          {...rest}
          onGridReady={this.onGridReadyCB}
        />
      </GridStyle>
    );
  }

  static defaultProps = {
    defaultColDef: {
      editable: false,
      resizable: true,
      sortable: true,
      floatingFilter: true,
      suppressPaste: true,
      filter: 'agTextColumnFilter',
      cellEditor: 'agTextCellEditor',
      filterParams: { newRowsAction: 'keep', filterOptions },
    },
    // defaultCsvExportParams: {
    //   processCellCallback: (params: any) => {
    //     if (params.column.getColId() === 'id') {
    //       const rawGid = params.value;
    //       return rawGid ? parseInt(rawGid.split('/').pop(), 10) : null; // Export as integer
    //     }
    //     return params.value; // Default processing for other columns
    //   },
    // },
    processCellForClipboard: gc,
    processCellFromClipboard: getClipboardValue,
    cacheBlockSize: 20,
    components: { dateTimeCellEditor: DateTimeCellEditor },
    style: { height: 'calc(100vh - 250px)' },
  };
}

const noRowsOverlayComponent = () => <div className="flex items-center justify-center">{t`No data`}</div>;

const statusBar = {
  statusPanels: [
    { statusPanel: 'serverSideTotalPanel' },
    { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
    { statusPanel: 'agAggregationComponent', align: 'left' },
  ],
};
/** Default state for column */
const defaultState: ColumnStateParams = {
  // hide: false,
};

// const ImageCell = ({ value }: ICellRendererParams) => (value ? <Image style={{ backgroundColor: 'white' }} src={value} /> : null);
