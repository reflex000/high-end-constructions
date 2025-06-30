const icons = Object.keys(require('lucide-react'));

const usedIcons = [
  'Building', 'Tools', 'Shield', 'Users', 'Wrench', 'Warehouse', 'Store', 'Truck',
  'Monitor', 'Lock', 'ClipboardList', 'HardHat', 'ArrowUp', 'Layers', 'Ruler',
  'Square', 'Bolt', 'Flame', 'FileCheck'
];

const missingIcons = usedIcons.filter(icon => !icons.includes(icon));

if (missingIcons.length > 0) {
  console.log('❌ Missing or incorrect icons:', missingIcons);
} else {
  console.log('✅ All icons exist!');
}
