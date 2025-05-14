'use client';

import { Inspector, InspectParams } from 'react-dev-inspector';

export function DevInspector() {
  return (
    <Inspector
      onClickElement={({ codeInfo }: InspectParams) => {
        if (!codeInfo?.absolutePath) return;
        const { absolutePath, lineNumber, columnNumber } = codeInfo;
        window.open(
          `${process.env.NEXT_PUBLIC_EDITOR || 'idea'}://open?file=${absolutePath}&line=${lineNumber}&column=${columnNumber}`,
        );
      }}
    />
  );
}
