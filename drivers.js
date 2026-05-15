export const INITIAL_DRIVERS = [
  { id: 1,  name: 'Ravi Kumar',    initials: 'RK', colorHex: '#1a7a4a', bgHex: '#e6f7ee', status: 'active',  vehicle: 'Auto',  rating: 4.8, rides: 6,  lat: 200, lng: 180, phone: '+91 98400 11111' },
  { id: 2,  name: 'Priya Sharma',  initials: 'PS', colorHex: '#185fa5', bgHex: '#e6f1fb', status: 'busy',    vehicle: 'Sedan', rating: 4.9, rides: 3,  lat: 280, lng: 260, phone: '+91 98400 22222' },
  { id: 3,  name: 'Arjun Nair',    initials: 'AN', colorHex: '#533ab7', bgHex: '#eeedfe', status: 'active',  vehicle: 'SUV',   rating: 4.7, rides: 5,  lat: 360, lng: 150, phone: '+91 98400 33333' },
  { id: 4,  name: 'Divya Reddy',   initials: 'DR', colorHex: '#d85a30', bgHex: '#faece7', status: 'busy',    vehicle: 'Sedan', rating: 4.6, rides: 2,  lat: 150, lng: 340, phone: '+91 98400 44444' },
  { id: 5,  name: 'Suresh Pillai', initials: 'SP', colorHex: '#5f5e5a', bgHex: '#f1efe8', status: 'idle',    vehicle: 'Auto',  rating: 4.5, rides: 0,  lat: 440, lng: 300, phone: '+91 98400 55555' },
  { id: 6,  name: 'Meera Joshi',   initials: 'MJ', colorHex: '#993556', bgHex: '#fbeaf0', status: 'active',  vehicle: 'SUV',   rating: 4.9, rides: 7,  lat: 320, lng: 380, phone: '+91 98400 66666' },
  { id: 7,  name: 'Kiran Das',     initials: 'KD', colorHex: '#b33030', bgHex: '#fce8e8', status: 'offline', vehicle: 'Bike',  rating: 4.3, rides: 0,  lat: 500, lng: 200, phone: '+91 98400 77777' },
  { id: 8,  name: 'Ananya Bose',   initials: 'AB', colorHex: '#185fa5', bgHex: '#e6f1fb', status: 'active',  vehicle: 'Sedan', rating: 4.8, rides: 4,  lat: 240, lng: 440, phone: '+91 98400 88888' },
  { id: 9,  name: 'Rahul Verma',   initials: 'RV', colorHex: '#533ab7', bgHex: '#eeedfe', status: 'idle',    vehicle: 'Auto',  rating: 4.6, rides: 1,  lat: 480, lng: 400, phone: '+91 98400 99999' },
  { id: 10, name: 'Sneha Iyer',    initials: 'SI', colorHex: '#ba7517', bgHex: '#faeeda', status: 'busy',    vehicle: 'SUV',   rating: 4.7, rides: 3,  lat: 100, lng: 450, phone: '+91 98400 10101' },
];

export const STATUS_LABEL = {
  active:  'Available',
  busy:    'In ride',
  idle:    'Idle',
  offline: 'Offline',
};

export const STATUS_COLOR = {
  active:  { dot: '#1a7a4a', bg: '#e6f7ee', text: '#145c38' },
  busy:    { dot: '#c27a00', bg: '#fff3cd', text: '#7a4c00' },
  idle:    { dot: '#6b6b6b', bg: '#f1f1f1', text: '#444' },
  offline: { dot: '#b33030', bg: '#fce8e8', text: '#7a1e1e' },
};

export const MAP_ROADS = [
  'M 50 100 Q 200 80 350 120 T 600 100',
  'M 0 200 H 620',
  'M 0 320 H 620',
  'M 100 0 V 520',
  'M 300 0 V 520',
  'M 500 0 V 520',
  'M 50 400 Q 300 360 580 420',
  'M 0 450 Q 200 430 400 460 T 620 440',
];

export const MAP_BLOCKS = [
  [60,50,80,60],[180,60,100,50],[320,40,90,70],[460,55,80,55],
  [80,160,60,80],[200,150,110,70],[380,140,80,90],[520,150,70,60],
  [60,270,90,60],[200,260,80,70],[320,250,100,80],[460,265,80,65],
  [60,380,80,50],[210,370,90,60],[360,375,80,60],[490,370,70,55],
];
