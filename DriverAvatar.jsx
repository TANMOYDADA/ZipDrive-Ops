import React from 'react';

export default function DriverAvatar({ driver, size = 34 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: driver.bgHex,
      color: driver.colorHex,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size * 0.35,
      fontWeight: 500,
      flexShrink: 0,
    }}>
      {driver.initials}
    </div>
  );
}
