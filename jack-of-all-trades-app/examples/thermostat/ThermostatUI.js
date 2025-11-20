const UIComponent = require('../../core/UIComponent');

/**
 * Custom UI for thermostat - manufacturer branded
 */
class ThermostatUI extends UIComponent {
  constructor(device) {
    super(device);
    // Custom branding for this manufacturer
    this.setTheme({
      primaryColor: '#ff6b35',
      secondaryColor: '#004e89',
      brandName: 'ClimateControl Pro'
    });
  }

  render() {
    const state = this.device.state;
    console.log('\n' + '='.repeat(50));
    console.log(`  ${this.theme.brandName}`);
    console.log('='.repeat(50));
    console.log(`  Device: ${this.device.name}`);
    console.log(`  Status: ${state.connected ? '🟢 Connected' : '🔴 Offline'}`);
    console.log('─'.repeat(50));
    console.log(`  Current Temp:  ${state.temperature}°F`);
    console.log(`  Target Temp:   ${state.targetTemperature}°F`);
    console.log(`  Mode:          ${state.mode.toUpperCase()}`);
    console.log(`  Fan Speed:     ${state.fanSpeed}`);
    console.log(`  Humidity:      ${state.humidity}%`);
    console.log('='.repeat(50) + '\n');
  }

  async handleAction(action, params) {
    switch(action) {
      case 'setTemp':
        await this.device.setTemperature(params.temperature);
        break;
      case 'setMode':
        await this.device.setMode(params.mode);
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
    this.render();
  }
}

module.exports = ThermostatUI;
