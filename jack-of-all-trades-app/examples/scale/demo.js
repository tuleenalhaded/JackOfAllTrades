const Platform = require('../../core/Platform');
const ScaleDevice = require('./ScaleDevice');
const ScaleUI = require('./ScaleUI');

async function demo() {
  console.log('\n💪 SMART FITNESS SCALE DEMO\n');

  // Platform setup
  const platform = new Platform();
  platform.addSubscription('FitTrack Corp', 'premium');

  // Create and register device
  const scale = new ScaleDevice({
    id: 'scale-001',
    name: 'Bathroom Scale',
    manufacturer: 'FitTrack Corp'
  });

  platform.registerDevice(scale);
  await scale.connect();

  // Create custom UI
  const ui = new ScaleUI(scale);
  ui.render();

  // Simulate measurements over several days
  console.log('📱 User steps on scale - Day 1...');
  await ui.handleAction('measure', { 
    weight: 180, 
    height: 70 
  });

  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('📱 User steps on scale - Day 2...');
  await ui.handleAction('measure', { 
    weight: 179.5, 
    height: 70 
  });

  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('📱 User views progress trend...');
  await ui.handleAction('viewTrend', { days: 2 });

  console.log('✓ Demo complete - Same platform, completely different device type\n');
}

demo().catch(console.error);
