/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { IFilterReactComp } from '@ag-grid-community/react';
import { Select } from 'antd';

export class BoolCustomFilter extends React.Component<any, any> implements IFilterReactComp {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  doesFilterPass() {
    return true;
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  isFilterActive() {
    return true;
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  getModel() {
    const { value } = this.state;
    return value !== '' ? { filterType: 'text', type: 'bool_str', filter: value } : {};
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  setModel(model: any) {
    if (model?.value) this.setState({ value: model.value });
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  setValueFromFloatingFilter(value: any) {
    this.valueChanged(value);
  }

  valueChanged = (value: any) => {
    this.setState({ value }, () => this.props.filterChangedCallback());
  };

  render() {
    const { value } = this.state;
    return (
      <Select size="small" value={value} onChange={this.valueChanged}>
        <Select.Option value="">Бүгд</Select.Option>
        {Object.entries(this.props.values).map(([key, v]: any) => (
          <Select.Option key={key} value={key}>
            {v}
          </Select.Option>
        ))}
      </Select>
    );
  }
}
