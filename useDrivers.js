import { useState, useEffect, useCallback } from 'react';
import { INITIAL_DRIVERS } from '../data/drivers';

export function useDrivers() {
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS);

  // Simulate live GPS movement every 2.5s for active/busy drivers
  useEffect(() => {
    const interval = setInterval(() => {
      setDrivers(prev =>
        prev.map(d => {
          if (d.status === 'active' || d.status === 'busy') {
            return {
              ...d,
              lat: Math.max(20, Math.min(500, d.lat + (Math.random() - 0.5) * 6)),
              lng: Math.max(20, Math.min(600, d.lng + (Math.random() - 0.5) * 6)),
            };
          }
          return d;
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = useCallback((id, status) => {
    setDrivers(prev => prev.map(d => d.id === id ? { ...d, status } : d));
  }, []);

  const stats = {
    active:  drivers.filter(d => d.status === 'active').length,
    busy:    drivers.filter(d => d.status === 'busy').length,
    idle:    drivers.filter(d => d.status === 'idle').length,
    offline: drivers.filter(d => d.status === 'offline').length,
    totalRides: drivers.reduce((s, d) => s + d.rides, 0),
    revenue: `₹${(drivers.reduce((s, d) => s + d.rides, 0) * 175).toLocaleString('en-IN')}`,
  };

  return { drivers, stats, updateStatus };
}
