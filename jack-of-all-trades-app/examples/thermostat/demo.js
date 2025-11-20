const Platform = require('../../core/Platform');
const ThermostatDevice = require('./ThermostatDevice');
const ThermostatUI = require('./ThermostatUI');

async function demo() {
  console.log('\n🏠 SMART THERMOSTAT DEMO\n');

  // Platform setup
  const platform = new Platform();
  platform.addSubscription('ClimateControl Inc', 'premium');

  // Create and register device
  const thermostat = new ThermostatDevice({
    id: 'thermo-001',
    name: 'Living Room Thermostat',
    manufacturer: 'ClimateControl Inc'
  });

  platform.registerDevice(thermostat);
  await thermostat.connect();

  // Create custom UI
  const ui = new ThermostatUI(thermostat);
  ui.render();

  // Simulate user interactions
  console.log('📱 User adjusts temperature to 68°F...');
  await ui.handleAction('setTemp', { temperature: 68 });

  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('📱 User switches to cooling mode...');
  await ui.handleAction('setMode', { mode: 'cool' });

  console.log('\n✓ Demo complete - Single app, custom branded experience\n');
}

demo().catch(console.error);
