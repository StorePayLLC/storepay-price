/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColDef, ValueFormatterParams } from '@ag-grid-community/core';

import { formatGidToInt, formatMoney } from '@/utils/helper';
import { dateFormat, datePart, filterOptions } from '@/utils/helpers';

export type ColumnType = 'id' | 'text' | 'number' | 'date' | 'boolean' | 'money' | 'mnt' | 'tid' | 'idr' | 'bold' | 'gid';

export const columnTypes: Record<string, ColDef> = {
  text: {
    filter: 'agTextColumnFilter',
    filterParams: { newRowsAction: 'keep', filterOptions },
  },
  gid: {
    valueFormatter: ({ value }: ValueFormatterParams) => (value ? formatGidToInt(value).toString() : ''),
  },
  tid: {
    filter: 'agTextColumnFilter',
    cellRenderer: 'loadingRenderer',
    editable: false,
    headerName: 'ID',
    width: 90,
    filterParams: { newRowsAction: 'keep', filterParams: { newRowsAction: 'keep', filterOptions } },
  },
  id: {
    filter: 'agNumberColumnFilter',
    cellRenderer: 'loadingRenderer',
    editable: false,
    headerName: 'ID',
    width: 90,
    filterParams: {
      newRowsAction: 'keep',
      filterOptions: [
        'equals',
        'notEqual',
        'lessThan',
        'lessThanOrEqual',
        'greaterThan',
        'greaterThanOrEqual',
        'inRange',
        {
          displayKey: 'null',
          displayName: 'Empty',
          predicate: (cellValue: any) => cellValue == null,
          numberOfInputs: 0,
        },
      ],
    },
    valueFormatter: ({ data }: ValueFormatterParams) => (data?.id ? formatGidToInt(data?.id).toString() : ''),
    useValueFormatterForExport: true,
  },
  number: {
    filter: 'agNumberColumnFilter',
    filterParams: {
      newRowsAction: 'keep',
      filterOptions: [
        'equals',
        'notEqual',
        'lessThan',
        'lessThanOrEqual',
        'greaterThan',
        'greaterThanOrEqual',
        'inRange',
        {
          displayKey: 'null',
          displayName: 'Empty',
          predicate: (cellValue: any) => cellValue == null,
          numberOfInputs: 0,
        },
      ],
    },
    cellClass: ['fr', 'zeroDecimalNumber'],
  },
  money: {
    valueFormatter: ({ value, data }: ValueFormatterParams) =>
      formatMoney(value, data?.currency || data?.wallet?.currency || '', 2),
  },
  mnt: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatMoney(value, '₮', 2),
  },
  idr: {
    valueFormatter: ({ value }: ValueFormatterParams) => formatMoney(value, 'Rp', 0),
  },
  bold: { cellStyle: { fontSize: '14px', color: 'black', fontWeight: 'bold' }, cellClass: 'boldCell' },
  date: {
    filter: 'agDateColumnFilter',
    cellClass: 'dateFormat',
    cellEditor: 'dateTimeCellEditor',
    cellEditorPopup: true,
    filterParams: {
      newRowsAction: 'keep',
      filterOptions: [
        'equals',
        'notEqual',
        'lessThan',
        'greaterThan',
        'inRange',
        {
          displayKey: 'null',
          displayName: 'Empty',
          predicate: (cellValue: any) => cellValue == null,
          numberOfInputs: 0,
        },
      ],
    },
    valueFormatter: ({ value }: any) => dateFormat(value) || '',
    width: 140,
  },
  dateOnly: {
    valueFormatter: ({ value }: ValueFormatterParams) => datePart(value),
  },
  boolean: {
    cellRenderer: 'check',
    filter: 'boolFilter',
    floatingFilterComponent: 'boolFilterComponent',
    cellEditor: 'agRichSelectCellEditor',
    cellEditorParams: { values: [true, false] },
    // show this editor in a popup
    cellEditorPopup: true,
    // position the popup under the cell
    cellEditorPopupPosition: 'under',
  },
};
