// eslint-disable-next-line  import/no-named-as-default
import styled from 'styled-components';

export const GridStyle = styled.div`
  .ag-react-container {
    div {
      line-height: initial;
    }
  }

  .ag-cell-wrapper,
  .ag-cell {
    display: flex;
    align-items: center;
    .lh {
      line-height: 12px;
    }
  }

  &.ag-theme-balham .ag-ltr .ag-cell {
    //white-space: pre-wrap;
    line-height: 16px;
  }
  &.ag-theme-balham.hide-handler {
    .ag-group-expanded,
    .ag-invisible,
    .ag-group-child-count {
      display: none;
    }
  }

  .fc {
    justify-content: center;
  }

  .fl {
    justify-content: flex-start;
  }

  .fr {
    justify-content: flex-end;
  }

  .fs {
    justify-content: space-between;
  }

  .fw {
    padding: 0 !important;
    .ag-react-container {
      width: 100%;
    }
  }

  .pw {
    white-space: pre-wrap;
    line-height: 1.5 !important;
    text-align: left;
  }

  &.ag-theme-balham .ag-ltr .ag-cell-last-left-pinned {
    padding: 0 4px 0 0;
    .abs {
      position: absolute;
      left: 0;
      top: 14px;
    }
  }

  .ag-group-expanded .ag-icon {
    margin-right: 4px !important;
  }

  .ag-theme-balham.h50 .ag-cell-inline-editing {
    height: 50px !important;
  }

  &.ag-theme-balham .ag-root-wrapper {
    border: none;
  }

  &.ag-theme-balham .ag-root {
    border: none;
  }

  .List {
    border: 1px solid #d9dddd;
  }

  .ListItemEven,
  .ListItemOdd {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ListItemEven {
    background-color: #f8f8f0;
  }

  .ag-theme-balham.no-leaf .ag-ltr .ag-row-group-leaf-indent {
    margin-left: 0;
  }

  .ag-input-text-wrapper {
    width: 100%;
  }

  .di .ag-react-container {
    display: inline-block;
  }

  .di .ag-row-group-indent-0 {
    display: flex;
    align-items: center;
  }

  .ag-theme-balham.h50 .ag-theme-balham .ag-cell {
    display: flex;
    align-items: center;
  }

  .ag-theme-balham.h50 .ag-details-row {
    padding: 0;
  }

  .ag-theme-balham.h50 .ag-header-cell,
  .ag-theme-balham .ag-header-group-cell {
    padding-right: 0;
  }

  .ag-theme-balham.h50 .ag-react-container .badge {
    font-size: 11px;
    padding: 3px 4px;
  }

  .ag-theme-balham.clvl2 .ag-row-group-indent-2 {
    display: flex !important;
    align-items: center !important;
  }

  .d-flex .ag-row-group-indent-1 {
    text-align: center;
    display: flex;
    align-items: center;
  }

  .zeroDecimalNumber {
    justify-content: flex-end;
  }

  .ag-theme-balham .break {
    word-break: break-all;
    white-space: pre-wrap;
    line-height: 1em !important;
  }

  .react-datepicker {
    min-width: 330px;
  }
  .ag-cell-wrapper.ag-row-group {
    align-items: center;
  }

  .ag-root-wrapper.ag-layout-normal {
    overflow: visible !important;
  }

  .green-flag-div {
    background-color: #c9f0d7;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //padding-left: 5px;
    border-radius: 8px;
  }

  .disabled {
    background-color: #f0f3f5;
  }

  .ag-overlay-wrapper {
    flex: none;
    align-items: center;
    pointer-events: all;
    justify-content: center;
    text-align: center;
    background-color: hsla(0, 0%, 100%, 0.66);
    box-sizing: border-box;
    outline: none;
  }
`;
