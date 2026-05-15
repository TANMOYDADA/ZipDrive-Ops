import React from 'react';

export default function StatCard({ value, label, accent }) {
  return (
    <div style={{
      background: '#f7f7f5',
      borderRadius: 8,
      padding: '10px 12px',
    }}>
      <div style={{
        fontSize: 22,
        fontWeight: 500,
        color: accent ? '#1a7a4a' : '#1a1a1a',
        lineHeight: 1.1,
      }}>
        {value}
      </div>
      <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>{label}</div>
    </div>
  );
}
