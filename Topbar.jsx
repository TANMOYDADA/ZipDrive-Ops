import React from 'react';
import { Bell } from 'lucide-react';

export default function Topbar() {
  return (
    <div style={{
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px',
      background: '#fff',
      borderBottom: '0.5px solid #e5e5e0',
      zIndex: 5,
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28,
          background: '#1a1a2e',
          borderRadius: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#e8d5a3">
            <path d="M8 1L2 5v6l6 4 6-4V5z" />
          </svg>
        </div>
        <span style={{ fontSize: 15, fontWeight: 500, color: '#1a1a1a' }}>
          ZipDrive <span style={{ fontWeight: 400, color: '#888' }}>Ops</span>
        </span>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Live badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          fontSize: 12,
          background: '#e6f7ee', color: '#145c38',
          padding: '4px 10px', borderRadius: 8,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#1a7a4a',
            display: 'inline-block',
            animation: 'pulse 1.5s ease-in-out infinite',
          }} />
          Live
        </div>

        <button
          aria-label="Notifications"
          style={{
            width: 32, height: 32,
            background: '#f7f7f5',
            border: '0.5px solid #e5e5e0',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: '#444',
          }}
        >
          <Bell size={14} />
        </button>

        {/* Avatar */}
        <div style={{
          width: 30, height: 30, borderRadius: '50%',
          background: '#1a1a2e',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 500, color: '#e8d5a3',
        }}>
          AD
        </div>
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
    </div>
  );
}
