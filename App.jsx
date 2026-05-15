import React, { useState } from 'react';
import Topbar  from './components/Topbar';
import Sidebar from './components/Sidebar';
import LiveMap from './components/LiveMap';
import { useDrivers } from './hooks/useDrivers';

export default function App() {
  const { drivers, stats, updateStatus } = useDrivers();
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gridTemplateRows: 'auto 1fr',
      height: '100vh',
      fontFamily: "'DM Sans', sans-serif",
      background: '#f0f0ea',
      overflow: 'hidden',
    }}>
      <Topbar />
      <Sidebar
        stats={stats}
        drivers={drivers}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <LiveMap
        drivers={drivers}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onStatusChange={(id, status) => {
          updateStatus(id, status);
          setSelectedId(null);
        }}
      />
    </div>
  );
}
