import * as React from 'react';
import { useEffect } from 'react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import {
  ColumnMovedEvent,
  ColumnPinnedEvent,
  ColumnResizedEvent,
  ColumnVisibleEvent,
  GridApi,
  ModuleRegistry,
} from '@ag-grid-community/core';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { t } from '@lingui/core/macro';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';

import { CheckCell } from '@/components/ag-grid/cell';
import { BoolFilter, BoolFilterComponent } from '@/components/ag-grid/filter/BoolFilter';
import IdRenderer from '@/components/ag-grid/IdRenderer';
import { excelStyles, filterOptions } from '@/utils/helpers';
import storage from '@/utils/storage';

import { columnTypes } from './columnTypes';
import { GridStyle } from './Grid.style';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  StatusBarModule,
  ClipboardModule,
  ExcelExportModule,
  RangeSelectionModule,
  SetFilterModule,
  MenuModule,
  RichSelectModule,
  RowGroupingModule,
]);

export interface AgGridSimpleProps<T> extends AgGridReactProps<T> {
  containerClass?: string;
  styleHeight?: string;
  colState?: string;

  isLoading?: boolean;
}

export default function AgGridSimple<T>({
  containerClass,
  styleHeight = 'calc(100vh - 90px)',
  defaultColDef = {
    cellEditor: 'agTextCellEditor',
    filter: 'agTextColumnFilter',
    editable: false,
    cellEditorPopup: true,
    resizable: true,
    sortable: true,
    filterParams: { newRowsAction: 'keep', filterOptions },
  },
  onGridReady,
  colState,
  isLoading,
  components,
  ...props
}: AgGridSimpleProps<T>) {
  const apiRef = React.useRef<GridApi | null>(null);
  const selfProps: Partial<AgGridReactProps> = {};
  if (colState) {
    const saveGridState = ({ api }: ColumnVisibleEvent | ColumnPinnedEvent | ColumnResizedEvent | ColumnMovedEvent) =>
      storage.setItem(colState, api.getColumnState());
    selfProps.onColumnVisible = saveGridState;
    selfProps.onColumnPinned = saveGridState;
    selfProps.onColumnResized = saveGridState;
    selfProps.onColumnMoved = saveGridState;
  }

  useEffect(() => {
    if (isLoading) apiRef.current?.showLoadingOverlay();
    else if (isLoading === false) apiRef.current?.hideOverlay();
  }, [isLoading]);

  return (
    <GridStyle className={`ag-theme-balham ${containerClass}`} style={{ height: styleHeight }}>
      <AgGridReact
        cacheBlockSize={100}
        defaultColDef={defaultColDef}
        overlayLoadingTemplate='<span class="ag-overlay-loading-center">loading ...</span>'
        statusBar={{
          statusPanels: [
            { statusPanel: 'agTotalRowCountComponent', align: 'left' },
            { statusPanel: 'agFilteredRowCountComponent' },
            { statusPanel: 'agSelectedRowCountComponent' },
            { statusPanel: 'agAggregationComponent' },
          ],
        }}
        components={{
          check: CheckCell,
          loadingRenderer: IdRenderer,
          boolFilter: BoolFilter,
          boolFilterComponent: BoolFilterComponent,
          ...components,
        }}
        getRowStyle={({ node }) => (node.footer ? { fontWeight: 'bold' } : undefined)}
        columnTypes={columnTypes}
        excelStyles={excelStyles}
        cellSelection
        localeText={{ totalRows: t`Total`, inList: 'inList', isEmpty: 'is empty?' }}
        onGridReady={(grid) => {
          if (colState) {
            const cs = storage.getItem(colState);
            if (cs) grid.api.applyColumnState({ state: cs, applyOrder: true, defaultState: { hide: false } });
          }
          window.agGridApi = grid.api;
          apiRef.current = grid.api;
          if (onGridReady) onGridReady(grid);
        }}
        {...selfProps}
        {...props}
      />
    </GridStyle>
  );
}
