'use client';
// eslint-disable-next-line max-classes-per-file
import React from 'react';
import { IDoesFilterPassParams, IFilterParams, IFloatingFilterParams } from '@ag-grid-community/core';
import { IFilterReactComp, IFloatingFilterReactComp } from '@ag-grid-community/react';
import { Select } from 'antd';

export type BoolFilterComponentProps = IFloatingFilterParams<BoolFilter> & {
  filterParams?: {
    readOnly?: boolean;
  };
};

export class BoolFilterComponent
  extends React.Component<BoolFilterComponentProps, { value?: string | boolean | 'undefined' }>
  implements IFloatingFilterReactComp
{
  constructor(props: BoolFilterComponentProps) {
    super(props);
    const state = { value: undefined };

    this.props.parentFilterInstance((instance) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state.value = instance.getValue() as any;
    });

    this.state = state;
  }

  valueChanged = (value: string) => {
    this.setState({ value }, () => {
      this.props.parentFilterInstance((instance) => {
        instance.fromSelect(this.state.value);
      });
    });
  };

  // eslint-disable-next-line react/no-unused-class-component-methods,class-methods-use-this
  onParentModelChanged() {
    /*ignore*/
  }

  render() {
    const { filterParams } = this.props;
    const readOnly = filterParams?.readOnly || false;
    const { value } = this.state;

    const converted = typeof value === 'boolean' ? `${value}` : value;
    return (
      <Select
        disabled={readOnly}
        size="small"
        value={converted || ''}
        onChange={this.valueChanged}
        style={{ width: '100%' }}
        allowClear={value !== undefined}
      >
        <Select.Option value="true">yes</Select.Option>
        <Select.Option value="false">no</Select.Option>
      </Select>
    );
  }
}

export class BoolFilter implements IFilterReactComp {
  value: 'true' | 'false' | 'undefined' | undefined;
  filterChangedCallback: ((additionalEventAttributes?: string) => void) | undefined;
  el!: HTMLDivElement;
  colId?: string;

  init(params: IFilterParams) {
    this.colId = params.column.getColId();
    this.el = document.createElement('div');
    this.value = undefined;
    this.filterChangedCallback = params.filterChangedCallback;
  }

  getGui() {
    return this.el;
  }

  doesFilterPass({ data }: IDoesFilterPassParams) {
    if (this.colId) {
      const value = data[this.colId];
      return value === this.getValue();
    }

    return true;
  }

  isFilterActive() {
    return typeof this.value !== 'undefined';
  }

  getModel() {
    if (!this.isFilterActive()) return undefined;
    return { type: 'bool', value: this.getValue() };
  }

  getValue() {
    if (this.value === 'true') return true;
    if (this.value === 'false') return false;
    return this.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setModel(model: any) {
    this.value = model?.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fromSelect(value: any) {
    this.value = value;
    this.filterChangedCallback?.();
  }
}
