import React from 'react';
import StatCard from './StatCard';
import DriverList from './DriverList';

export default function Sidebar({ stats, drivers, selectedId, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRight: '0.5px solid #e5e5e0',
      overflow: 'hidden',
      height: '100%',
    }}>
      {/* Stats */}
      <div style={{ padding: '14px 16px', borderBottom: '0.5px solid #e5e5e0' }}>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
          Overview
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <StatCard value={stats.active}     label="Active drivers"  accent />
          <StatCard value={stats.busy}       label="In ride" />
          <StatCard value={stats.totalRides} label="Rides today" />
          <StatCard value={stats.revenue}    label="Revenue" />
        </div>
      </div>

      {/* Driver list */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <DriverList
          drivers={drivers}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}
