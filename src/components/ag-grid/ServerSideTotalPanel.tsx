import * as React from 'react';
import { IStatusPanelParams } from '@ag-grid-community/core';
import { Trans } from '@lingui/react/macro';

import { formatMoney, useMountedState } from '@/utils/helper';

function ServerSideTotalPanel({ api }: IStatusPanelParams) {
  const isMounted = useMountedState();
  const [total, setTotal] = React.useState(api.getDisplayedRowCount() || 0);

  React.useEffect(() => {
    api.addEventListener('modelUpdated', () => {
      const totalCount = api.getDisplayedRowCount();
      if (isMounted() && !!totalCount) setTotal(totalCount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!total) return <div />;
  return (
    <div className="ag-name-value">
      <Trans>
        Total: <span className="ag-name-value-value">{formatMoney(total, '')}</span>
      </Trans>
    </div>
  );
}

export default ServerSideTotalPanel;
