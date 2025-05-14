import { IServerSideGetRowsRequest } from '@ag-grid-community/core';
import { map, set } from 'lodash';
import moment from 'moment';

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
  inRange: 'gt',
  lessThanOrEqual: 'lteq',
  greaterThanOrEqual: 'gteq',
  null: 'null',
  '': 'notNull',
};

export const getFilters = (filters: IServerSideGetRowsRequest['filterModel'], keyMap: Record<string, string>) => {
  const query = {};
  map(filters, ({ filter, type, filterType, values, dateFrom, dateTo, filterTo, value }, key: string) => {
    const convertedKey = keyMap[key] ?? key;
    if (filterType === 'text' && type === 'inList') {
      set(query, `${convertedKey}.in`, filter.split(/,|\s/));
    } else if (['text', 'number'].includes(filterType)) {
      if (type === 'inRange') {
        set(query, `${convertedKey}.gteq`, filter);
        set(query, `${convertedKey}.lteq`, filterTo);
      } else if (type === 'null') {
        set(query, `${convertedKey}.null`, !filter ? true : !['1', 'true', 1, true, 'yes'].includes(filter));
      } else if (type === 'bool_str') {
        set(query, `${convertedKey}.eq`, filter);
      } else {
        const comp = comparator[type];
        if (['blank', 'null', 'notNull'].includes(comp)) {
          set(query, `${convertedKey}.${comp}`, true);
        } else {
          set(query, `${convertedKey}.${comp}`, filter);
        }
      }
    }
    if (filterType === 'set') {
      if (values.length > 0) {
        set(query, `${convertedKey}.in`, values);
      } else set(query, `${convertedKey}.null`, true);
      // query[`${this.convertedKey}`] = { null: true };
    }
    if (type === 'bool') {
      set(query, convertedKey, { eq: ['true', true, '1', 1, 'yes'].includes(value) });
    }

    if (filterType === 'raw') {
      Object.entries(filter).forEach(([k, v]) => {
        set(query, k, v);
      });
    }
    if (filterType === 'date') {
      if (type === 'inRange') {
        set(query, convertedKey, {
          gteq: moment(dateFrom).startOf('day').toDate(),
          lteq: moment(dateTo).endOf('day').toDate(),
        });
      } else if (type === 'lessThan') {
        set(query, `${convertedKey}.lteq`, moment(dateFrom).startOf('day').toDate());
      } else if (['lessThanOrEqual', 'greaterThanOrEqual'].includes(type)) {
        const now = moment();
        const newDate = moment(dateFrom).set({ hour: now.hour(), minute: now.minute(), second: now.second() });
        set(query, `${convertedKey}.${type === 'lessThanOrEqual' ? 'l' : 'g'}teq`, newDate.toDate());
      } else if (type === 'greaterThan') {
        set(query, `${convertedKey}.gteq`, moment(dateFrom).startOf('day').toDate());
      } else if (type === 'equals') {
        set(query, convertedKey, {
          gteq: moment(dateFrom).startOf('day').toDate(),
          lteq: moment(dateFrom).endOf('day').toDate(),
        });
      }
    }
  });
  return query;
};
