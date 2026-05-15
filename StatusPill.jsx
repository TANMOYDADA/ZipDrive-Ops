import React from 'react';
import { STATUS_COLOR, STATUS_LABEL } from '../data/drivers';

export default function StatusPill({ status }) {
  const c = STATUS_COLOR[status] || STATUS_COLOR.offline;
  return (
    <span style={{
      fontSize: 10,
      padding: '2px 8px',
      borderRadius: 99,
      fontWeight: 500,
      background: c.bg,
      color: c.text,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    }}>
      {STATUS_LABEL[status]}
    </span>
  );
}
