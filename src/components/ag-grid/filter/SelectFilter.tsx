/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Select } from 'antd';

export class SelectFilter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };
  }

  valueChanged = (value: any) => {
    this.setState({ value }, () => {
      this.props.parentFilterInstance((instance: any) => {
        // instance.getFrameworkComponentInstance().setValueFromFloatingFilter(value);
        instance.setValueFromFloatingFilter(value);
      });
    });
  };

  onParentModelChanged(parentModel: any) {
    this.setState({ value: parentModel?.filter ? parentModel.filter : '' });
  }

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
