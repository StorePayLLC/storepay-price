/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { Button, Spin } from 'antd';

import Link from '@/components/link';

const IdRender = ({
  value,
  data,
  onClick,
  link,
  formatValue,
}: ICellRendererParams & {
  onClick?: (data: any) => void;
  link: (data: any) => string;
  formatValue?: (value: any) => string; // Optional type
}) => {
  if (value === undefined) return <Spin size="small" />;

  const formatted = formatValue ? formatValue(value) : value; // Safely call formatValue

  if (link)
    return (
      <Link href={link(data)}>
        <Button type="link" size="small">
          {formatted}
        </Button>
      </Link>
    );

  if (onClick)
    return (
      <Button type="link" size="small" onClick={() => onClick(data)}>
        {formatted}
      </Button>
    );

  if (!value) return '';

  return value;
};

export default IdRender;
