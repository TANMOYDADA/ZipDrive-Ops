import React, { useState } from 'react';
import { Plus, Minus, RefreshCw } from 'lucide-react';
import { MAP_ROADS, MAP_BLOCKS, STATUS_COLOR } from '../data/drivers';
import DriverDetailPanel from './DriverDetailPanel';

export default function LiveMap({ drivers, selectedId, onSelect, onStatusChange }) {
  const [scale, setScale] = useState(1);
  const [tx, setTx]       = useState(0);
  const [ty, setTy]       = useState(0);

  const selectedDriver = drivers.find(d => d.id === selectedId) || null;

  const zoomIn  = () => setScale(s => Math.min(s * 1.25, 3));
  const zoomOut = () => setScale(s => Math.max(s / 1.25, 0.5));
  const reset   = () => { setScale(1); setTx(0); setTy(0); };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#dde8d4', overflow: 'hidden' }}>
      <svg
        viewBox="0 0 620 520"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
        aria-label="Live driver map"
      >
        <rect width="620" height="520" fill="#dde8d4" />

        <g transform={`translate(${tx},${ty}) scale(${scale})`}>
          {/* Roads */}
          {MAP_ROADS.map((d, i) => (
            <g key={i}>
              <path d={d} stroke="#c8d8be" strokeWidth="6" fill="none" opacity=".7" />
              <path d={d} stroke="#f5f5ee" strokeWidth="2" fill="none" opacity=".5" strokeDasharray="8,14" />
            </g>
          ))}

          {/* City blocks */}
          {MAP_BLOCKS.map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx="4" fill="#c5d4b8" opacity=".6" />
          ))}

          {/* Driver markers */}
          {drivers.map(d => {
            const cx  = d.lng;
            const cy  = d.lat;
            const col = STATUS_COLOR[d.status]?.dot || '#888';
            const bg  = STATUS_COLOR[d.status]?.bg  || '#eee';
            const sel = selectedId === d.id;
            const dim = selectedId !== null && !sel;

            return (
              <g
                key={d.id}
                opacity={dim ? 0.25 : 1}
                style={{ cursor: 'pointer' }}
                onClick={() => onSelect(sel ? null : d.id)}
              >
                {sel && <circle cx={cx} cy={cy} r="22" fill={col} opacity=".15" />}
                <circle cx={cx} cy={cy} r="14" fill={bg} stroke={col} strokeWidth={sel ? 2 : 1} />
                <text x={cx} y={cy + 4} textAnchor="middle" fontSize="9" fontWeight="500" fill={col}>
                  {d.initials}
                </text>
                {(d.status === 'active' || d.status === 'busy') && (
                  <circle
                    cx={cx + 10} cy={cy - 10} r="5"
                    fill={d.status === 'busy' ? '#e5a800' : '#1a7a4a'}
                    stroke="white" strokeWidth="1.5"
                  />
                )}
                <text x={cx} y={cy + 26} textAnchor="middle" fontSize="9" fill="#555">
                  {d.name.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Map controls */}
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {[
          { icon: <Plus size={14} />,        action: zoomIn,  label: 'Zoom in'  },
          { icon: <Minus size={14} />,       action: zoomOut, label: 'Zoom out' },
          { icon: <RefreshCw size={14} />,   action: reset,   label: 'Reset'    },
        ].map(({ icon, action, label }) => (
          <button
            key={label}
            onClick={action}
            aria-label={label}
            style={{
              width: 32, height: 32,
              background: '#fff',
              border: '0.5px solid #e5e5e0',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: '#444',
              transition: 'background 0.15s',
            }}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Driver detail panel */}
      <DriverDetailPanel
        driver={selectedDriver}
        onClose={() => onSelect(null)}
        onStatusChange={onStatusChange}
      />
    </div>
  );
}
