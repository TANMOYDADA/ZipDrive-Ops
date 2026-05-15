import React from 'react';
import { X, Star, Phone } from 'lucide-react';
import DriverAvatar from './DriverAvatar';
import StatusPill from './StatusPill';
import { STATUS_LABEL } from '../data/drivers';

const Row = ({ label, value }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12,
    padding: '5px 0',
    borderBottom: '0.5px solid #f0f0ea',
  }}>
    <span style={{ color: '#888' }}>{label}</span>
    <span style={{ fontWeight: 500, color: '#1a1a1a' }}>{value}</span>
  </div>
);

export default function DriverDetailPanel({ driver, onClose, onStatusChange }) {
  if (!driver) return null;

  const eta = driver.status === 'active' ? `${Math.floor(Math.random() * 5) + 1} min`
            : driver.status === 'busy'   ? 'On trip'
            : '—';

  return (
    <div style={{
      position: 'absolute',
      bottom: 14,
      left: 14,
      width: 240,
      background: '#fff',
      border: '0.5px solid #e5e5e0',
      borderRadius: 12,
      padding: '12px 14px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      zIndex: 10,
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <DriverAvatar driver={driver} size={32} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {driver.name}
          </div>
          <StatusPill status={driver.status} />
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', padding: 0, lineHeight: 1 }}
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>

      {/* Info rows */}
      <Row label="Vehicle"    value={driver.vehicle} />
      <Row label="Rating"     value={<span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Star size={11} fill="#f5a623" stroke="none" />{driver.rating}</span>} />
      <Row label="Rides today" value={driver.rides} />
      <Row label="ETA"        value={eta} />
      <Row label="Phone"      value={<a href={`tel:${driver.phone}`} style={{ color: '#185fa5', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}><Phone size={11} />{driver.phone}</a>} />

      {/* Status change */}
      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 11, color: '#aaa', marginBottom: 6 }}>Change status</div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['active', 'idle', 'offline'].map(s => (
            <button
              key={s}
              onClick={() => onStatusChange(driver.id, s)}
              disabled={driver.status === s}
              style={{
                fontSize: 10,
                padding: '3px 8px',
                borderRadius: 99,
                border: '0.5px solid',
                borderColor: driver.status === s ? '#1a1a2e' : '#ddd',
                background: driver.status === s ? '#1a1a2e' : '#fff',
                color: driver.status === s ? '#e8d5a3' : '#666',
                cursor: driver.status === s ? 'default' : 'pointer',
                fontFamily: 'inherit',
                fontWeight: 500,
              }}
            >
              {STATUS_LABEL[s]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
