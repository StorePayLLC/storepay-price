import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
// import defaultObject from 'assets/fixtures/handlebarData.json';
// import Handlebars from 'handlebars';

function HandleBarCell({ value }: ICellRendererParams) {
  return <>{getPreview(value)}</>;
}

export default HandleBarCell;

function getPreview(str: string) {
  try {
    // const template = Handlebars.compile(str || '');
    // return template(defaultObject);
  } catch (e) {
    return str;
  }
}
