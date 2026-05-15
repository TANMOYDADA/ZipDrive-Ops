import React, { useState } from 'react';
import { Search } from 'lucide-react';
import DriverAvatar from './DriverAvatar';
import StatusPill from './StatusPill';

const FILTERS = [
  { key: 'all',    label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'busy',   label: 'In ride' },
  { key: 'idle',   label: 'Idle' },
];

export default function DriverList({ drivers, selectedId, onSelect }) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery]   = useState('');

  const filtered = drivers.filter(d => {
    const matchFilter = filter === 'all' || d.status === filter;
    const matchQuery  = d.name.toLowerCase().includes(query.toLowerCase())
                     || d.vehicle.toLowerCase().includes(query.toLowerCase());
    return matchFilter && matchQuery;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Search */}
      <div style={{ padding: '10px 16px', borderBottom: '0.5px solid #e5e5e0', position: 'relative' }}>
        <Search size={14} style={{ position: 'absolute', top: '50%', left: 26, transform: 'translateY(-50%)', color: '#aaa' }} />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search driver..."
          style={{
            width: '100%',
            fontSize: 13,
            padding: '7px 10px 7px 28px',
            border: '0.5px solid #e0e0d8',
            borderRadius: 8,
            background: '#f7f7f5',
            color: '#1a1a1a',
            outline: 'none',
            fontFamily: 'inherit',
          }}
        />
      </div>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 6, padding: '10px 16px', borderBottom: '0.5px solid #e5e5e0', flexWrap: 'wrap' }}>
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              fontSize: 11,
              padding: '4px 10px',
              borderRadius: 99,
              cursor: 'pointer',
              border: '0.5px solid',
              borderColor: filter === f.key ? '#1a1a2e' : '#ddd',
              background: filter === f.key ? '#1a1a2e' : '#fff',
              color: filter === f.key ? '#e8d5a3' : '#666',
              fontFamily: 'inherit',
              fontWeight: 500,
              transition: 'all 0.15s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Driver rows */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {filtered.length === 0 && (
          <div style={{ padding: '24px 16px', textAlign: 'center', color: '#aaa', fontSize: 13 }}>
            No drivers found
          </div>
        )}
        {filtered.map(d => (
          <div
            key={d.id}
            onClick={() => onSelect(d.id === selectedId ? null : d.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 16px',
              cursor: 'pointer',
              borderBottom: '0.5px solid #f0f0ea',
              borderLeft: d.id === selectedId ? '2px solid #1a1a2e' : '2px solid transparent',
              background: d.id === selectedId ? '#f7f7f5' : 'transparent',
              transition: 'background 0.12s',
            }}
          >
            <DriverAvatar driver={d} size={34} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {d.name}
              </div>
              <div style={{ fontSize: 11, color: '#888' }}>
                {d.vehicle} · {d.rides} rides
              </div>
            </div>
            <StatusPill status={d.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
