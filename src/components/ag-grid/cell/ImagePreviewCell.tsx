import * as React from 'react';
import { ICellRendererParams } from '@ag-grid-community/core';
import { Image } from 'antd';

// import { imageLink } from '@/utils/helper';

export const ImagePreviewCell = ({ value }: ICellRendererParams, width = 40, height = 40) => {
  if (!value) return '';
  return (
    <Image
      alt="img"
      width={width}
      height={height}
      src={value?.url}
      // preview={{ src: imageLink(value?.url, 'zoom') }}
      preview={{ src: value?.url }}
    />
  );
};
