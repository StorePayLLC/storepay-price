import { ExcelStyle, ProcessCellForExportParams, ValueFormatterParams } from '@ag-grid-community/core';
import { cloneDeep, get, set } from 'lodash';

export function dateFormat(dateString: string | Date): string {
  if (!dateString) return '';
  const d = new Date(dateString);
  return `${d.getFullYear()}/${`0${d.getMonth() + 1}`.slice(-2)}/${`0${d.getDate()}`.slice(-2)} ${`0${d.getHours()}`.slice(
    -2,
  )}:${`0${d.getMinutes()}`.slice(-2)}`;
}
export function dateFormatWithoutTime(dateString: string | Date): string {
  if (!dateString) return '';
  const d = new Date(dateString);
  return `${d.getFullYear()}-${`0${d.getMonth() + 1}`.slice(-2)}-${`0${d.getDate()}`.slice(-2)}`;
}

export function convertISOToDate(isoString: string) {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });

  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

export function datePart(dateString: string | Date) {
  if (!dateString) return '';
  const d = new Date(dateString);
  return `${d.getFullYear()}/${`0${d.getMonth() + 1}`.slice(-2)}/${`0${d.getDate()}`.slice(-2)}`;
}

export function getClipboardValue({ value }: ProcessCellForExportParams) {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}
export function processCellForClipboard({ value, column, formatValue }: ProcessCellForExportParams) {
  if (value === null) return '';
  if (typeof value === 'object') return JSON.stringify(value);
  const type = column.getColDef().type;
  if ((type === 'gid' || type?.includes('gid')) && formatValue) return formatValue(value);
  return value;
}

export function syntaxHighlight(json: string) {
  if (!json) return '';
  const str = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return str.replace(
    /("(\\u[\dA-Za-z]{4}|\\[^u]|[^"\\])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[Ee][+-]?\d+)?)/g,
    (match) => {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) cls = 'key';
        else cls = 'string';
      } else if (/true|false/.test(match)) cls = 'boolean';
      else if (/null/.test(match)) cls = 'null';
      return `<span class="${cls}">${match}</span>`;
    },
  );
}

export const filterOptions = [
  'startsWith',
  'contains',
  'equals',
  'notEqual',
  'endsWith',
  'notContains',
  {
    displayKey: 'null',
    displayName: 'Empty',
    predicate: (cellValue: string) => cellValue == null,
    numberOfInputs: 0,
  },
  'inList',
];

export function generateShortID(length = 6, ids: string[] = []): string {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  if (ids.includes(result)) return generateShortID(length, ids);
  return result;
}

export const formatMoney = (value: string | number, currency = '₮', fixed = 0) => {
  if (typeof value === 'undefined') return value;
  const re = `\\d(?=(\\d{${3}})+(\\.\\d*[0-9])?$)`;
  if (currency === '$')
    return `${currency}${Number(value)
      .toFixed(fixed)
      .replace(new RegExp(re, 'g'), '$&,')
      .replace(/(\.\d*[1-9])0+$|\.0*$/, '$1')}`.trim();
  return `${Number(value)
    .toFixed(fixed)
    .replace(new RegExp(re, 'g'), '$&,')
    .replace(/(\.\d*[1-9])0+$|\.0*$/, '$1')} ${currency}`.trim();
};

export const valueFormatter = ({ value }: ValueFormatterParams) => formatMoney(value);

export function withParser(object: any, parserObj: Record<string, ParserKey>) {
  const data = cloneDeep(object);
  Object.entries(parserObj).forEach(([key, value]) => {
    const val = get(data, key);
    if (val && parser[value]) set(data, key, parser[value](val));
  });
  return data;
}
export type ParserObject = Record<string, ParserKey | 1>;

export function withPickParser(object: any, parserObj: ParserObject) {
  const data = {};
  Object.entries(parserObj).forEach(([key, value]) => {
    const val = get(object, key);
    if (value === 1) set(data, key, val);
    else if (val && parser[value]) set(data, key, parser[value](val));
    else if (val !== undefined) set(data, key, val);
  });
  return data;
}

// checks user has any system role
export function hasRole(role: string[], obj: any) {
  if (!obj) return false;
  const role2 = obj.roles;
  if (!role || !role2) return false;
  return role.filter((value) => role2.indexOf(value) !== -1).length > 0;
}

// checks user is system admin
export function isSysAdmin(obj: any) {
  return hasRole(['admin'], obj);
}

// shoppy temporary admin
export function isShopAdmin(obj: any) {
  return hasRole(['shop_admin'], obj);
}

export type ParserKey = 'number' | 'bool' | 'int' | 'datetime';

const parser: Record<ParserKey, (val: any) => any> = {
  number(value: string) {
    return Number(value);
  },
  bool(v: any) {
    if (['false', '0', 'no', 0, false].includes(v)) return false;
    return !!v;
  },
  int(value: any) {
    return parseInt(value, 10);
  },
  datetime(value: any) {
    return new Date(value);
  },
};

export const excelStyles: ExcelStyle[] = [
  { id: 'header', font: { bold: true }, interior: { color: '#dadada', pattern: 'Solid' } },
  { id: 'grouped', font: { bold: true }, interior: { color: '#e6e6e6', pattern: 'Solid' } },
  {
    id: 'leafGroup',
    interior: { color: '#e6e6e6', pattern: 'Solid' },
    alignment: { horizontal: 'Right', vertical: 'Center' },
  },
  { id: 'zeroDecimalNumber', numberFormat: { format: '#,##0' } },
  { id: 'boldCell', font: { bold: true } },
  { id: 'redFont', font: { bold: true, color: '#FF0000' } },
  { id: 'redColor', font: { color: '#FF0000' } },
  { id: 'greenFont', font: { bold: true, color: '#197702' } },
  { id: 'dateFormat', dataType: 'DateTime', numberFormat: { format: 'yyyy/mm/dd hh:MM' } },
];

export const gender: Record<string, string> = {
  male: 'Эрэгтэй',
  female: 'Эмэгтэй',
  undefined: 'Тодорхойгүй',
};

export const colors: Record<string, string> = {
  active: '#344fa2',
  inactive: '#f8d46a',
  rejected: '#ff4d4f',
};

export const userRoles: Record<string, string> = {
  user: 'Хэрэглэгч',
  moderator: 'Модератор',
  admin: 'Админ',
};

export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  } else {
    return `${str.slice(0, num)}...`;
  }
}
