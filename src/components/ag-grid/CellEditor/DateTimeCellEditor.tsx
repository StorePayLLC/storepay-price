import React from 'react';
import { ICellEditorParams } from '@ag-grid-community/core';
// import { dayjsDatePicker } from 'components/fields';
import dayjs from 'dayjs';

import { DayjsDatePicker } from '@/components/form/fields';

type DateTimeCellEditorState = {
  value?: Date;
  defaultTime?: dayjs.Dayjs;
};

export class DateTimeCellEditor extends React.Component<ICellEditorParams, DateTimeCellEditorState> {
  constructor(props: ICellEditorParams) {
    super(props);
    this.state = { defaultTime: dayjs('00:00:00', 'HH:mm:ss') };
    if (props.value) {
      if (typeof props.value === 'string') {
        this.state = { value: new Date(props.value) };
      } else {
        this.state = { value: props.value };
      }
    }

    // if (props?.type === 'expire_date') this.state = { defaultTime: dayjs('23:59:59', 'HH:mm:ss') };
  }

  getValue() {
    const { value } = this.state;
    if (value) return value;
    return null;
  }

  isPopup() {
    return true;
  }

  render() {
    const { value, defaultTime } = this.state;
    return (
      <DayjsDatePicker
        value={value}
        // format="YYYY-MM-DD HH:mm:ss"
        showTime={{ defaultValue: defaultTime }}
        onChange={this.onChange}
      />
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange = (value: any) => this.setState({ value });
}
