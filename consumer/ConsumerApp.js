const Platform = require('../core/Platform');
const ThermostatDevice = require('../examples/thermostat/ThermostatDevice');
const ScaleDevice = require('../examples/scale/ScaleDevice');

class ConsumerApp {
  constructor(rl) {
    this.rl = rl;
    this.platform = new Platform();
    this.devices = [];
    this.setupDemoDevices();
  }

  setupDemoDevices() {
    // Simulate user's connected devices
    const thermostat = new ThermostatDevice({
      id: 'thermo-001',
      name: 'Living Room Thermostat',
      manufacturer: 'ClimateControl Inc'
    });
    
    const scale = new ScaleDevice({
      id: 'scale-001',
      name: 'Bathroom Scale',
      manufacturer: 'FitTrack Corp'
    });

    this.platform.registerDevice(thermostat);
    this.platform.registerDevice(scale);
    this.devices = [thermostat, scale];
  }

  async start() {
    await this.connectDevices();
    this.showDashboard();
  }

  async connectDevices() {
    for (const device of this.devices) {
      await device.connect();
    }
  }

  showDashboard() {
    console.log('\n' + '═'.repeat(60));
    console.log('  👤 CONSUMER DASHBOARD');
    console.log('═'.repeat(60));
    console.log('\n  Your Connected Devices:\n');
    
    this.devices.forEach((device, index) => {
      const status = device.state.connected ? '🟢' : '🔴';
      console.log(`  [${index + 1}] ${status} ${device.name}`);
      console.log(`      Manufacturer: ${device.manufacturer}`);
      console.log(`      Type: ${device.type}`);
      console.log('');
    });
    
    console.log('  [0] 🔙 Back to main menu');
    console.log('═'.repeat(60) + '\n');
    
    this.promptDeviceSelection();
  }

  promptDeviceSelection() {
    this.rl.question('Select a device to control (0-2): ', async (answer) => {
      const choice = parseInt(answer.trim());
      
      if (choice === 0) {
        console.log('\n👋 Returning to main menu...\n');
        process.exit(0);
      }
      
      if (choice >= 1 && choice <= this.devices.length) {
        await this.controlDevice(this.devices[choice - 1]);
      } else {
        console.log('\n❌ Invalid choice. Try again.\n');
        setTimeout(() => {
          console.clear();
          this.showDashboard();
        }, 1500);
      }
    });
  }

  async controlDevice(device) {
    console.clear();
    console.log('\n' + '═'.repeat(60));
    console.log(`  Controlling: ${device.name}`);
    console.log('═'.repeat(60) + '\n');
    
    if (device.type === 'thermostat') {
      await this.controlThermostat(device);
    } else if (device.type === 'fitness_scale') {
      await this.controlScale(device);
    }
  }

  async controlThermostat(device) {
    const state = device.state;
    console.log(`  Current Temperature: ${state.temperature}°F`);
    console.log(`  Target Temperature:  ${state.targetTemperature}°F`);
    console.log(`  Mode: ${state.mode.toUpperCase()}`);
    console.log(`  Humidity: ${state.humidity}%\n`);
    console.log('  [1] Set Temperature');
    console.log('  [2] Change Mode');
    console.log('  [0] Back\n');
    
    this.rl.question('Choose action: ', async (answer) => {
      switch(answer.trim()) {
        case '1':
          this.rl.question('Enter target temperature (60-85°F): ', async (temp) => {
            await device.setTemperature(parseInt(temp));
            console.log(`\n✓ Temperature set to ${temp}°F\n`);
            setTimeout(() => {
              console.clear();
              this.showDashboard();
            }, 1500);
          });
          break;
        case '2':
          console.log('\n  Modes: auto, heat, cool, off');
          this.rl.question('Enter mode: ', async (mode) => {
            await device.setMode(mode.toLowerCase());
            console.log(`\n✓ Mode changed to ${mode}\n`);
            setTimeout(() => {
              console.clear();
              this.showDashboard();
            }, 1500);
          });
          break;
        default:
          console.clear();
          this.showDashboard();
      }
    });
  }

  async controlScale(device) {
    const state = device.state;
    if (state.lastMeasurement) {
      console.log(`  Last Weight: ${state.weight} lbs`);
      console.log(`  BMI: ${state.bmi}`);
      console.log(`  Body Fat: ${state.bodyFat}%`);
      console.log(`  Last Reading: ${state.lastMeasurement.toLocaleString()}\n`);
    } else {
      console.log('  No measurements yet\n');
    }
    
    console.log('  [1] Take New Measurement');
    console.log('  [2] View Trend');
    console.log('  [0] Back\n');
    
    this.rl.question('Choose action: ', async (answer) => {
      switch(answer.trim()) {
        case '1':
          this.rl.question('Enter your weight (lbs): ', async (weight) => {
            this.rl.question('Enter your height (inches): ', async (height) => {
              await device.takeMeasurement({ 
                weight: parseFloat(weight), 
                height: parseInt(height) 
              });
              console.log('\n✓ Measurement recorded!\n');
              setTimeout(() => {
                console.clear();
                this.showDashboard();
              }, 1500);
            });
          });
          break;
        case '2':
          const trend = device.getTrend(7);
          console.log('\n  📊 7-Day Trend:');
          trend.forEach((m, i) => {
            console.log(`  Day ${i + 1}: ${m.weight} lbs (BMI: ${m.bmi})`);
          });
          console.log('\n  Press Enter to continue...');
          this.rl.question('', () => {
            console.clear();
            this.showDashboard();
          });
          break;
        default:
          console.clear();
          this.showDashboard();
      }
    });
  }
}

module.exports = ConsumerApp;
