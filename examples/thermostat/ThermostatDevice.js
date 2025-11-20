const Device = require('../../core/Device');

/**
 * Smart Thermostat - Example home appliance implementation
 */
class ThermostatDevice extends Device {
  constructor(config) {
    super({
      ...config,
      type: 'thermostat'
    });
    
    this.state = {
      temperature: 72,
      targetTemperature: 72,
      mode: 'auto', // auto, heat, cool, off
      fanSpeed: 'auto',
      humidity: 45,
      connected: false
    };

    this.capabilities = [
      'temperature_control',
      'mode_switching',
      'fan_control',
      'scheduling',
      'humidity_monitoring'
    ];
  }

  async connect() {
    this.state.connected = true;
    console.log(`[${this.name}] Connected to thermostat`);
  }

  async disconnect() {
    this.state.connected = false;
    console.log(`[${this.name}] Disconnected`);
  }

  async setTemperature(temp) {
    if (temp < 60 || temp > 85) {
      throw new Error('Temperature must be between 60-85°F');
    }
    await this.setState({ targetTemperature: temp });
  }

  async setMode(mode) {
    const validModes = ['auto', 'heat', 'cool', 'off'];
    if (!validModes.includes(mode)) {
      throw new Error(`Invalid mode. Choose: ${validModes.join(', ')}`);
    }
    await this.setState({ mode });
  }
}

module.exports = ThermostatDevice;
