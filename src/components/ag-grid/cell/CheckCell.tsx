import React from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons';

export function CheckCell({ value }: ICellRendererParams) {
  return (
    <div className="check">
      {`${value}` === 'true' || `${value}` === '1' || value === true ? (
        <CheckSquareOutlined size={18} />
      ) : (
        <MinusSquareOutlined size={18} />
      )}
    </div>
  );
}
