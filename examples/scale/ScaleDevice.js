const Device = require('../../core/Device');

/**
 * Smart Fitness Scale - Example health device implementation
 */
class ScaleDevice extends Device {
  constructor(config) {
    super({
      ...config,
      type: 'fitness_scale'
    });
    
    this.state = {
      weight: 0,
      bodyFat: 0,
      muscleMass: 0,
      bmi: 0,
      waterPercentage: 0,
      lastMeasurement: null,
      unit: 'lbs', // lbs or kg
      connected: false
    };

    this.capabilities = [
      'weight_measurement',
      'body_composition',
      'multi_user_profiles',
      'trend_tracking',
      'goal_setting'
    ];

    this.measurements = [];
  }

  async connect() {
    this.state.connected = true;
    console.log(`[${this.name}] Connected to scale`);
  }

  async disconnect() {
    this.state.connected = false;
    console.log(`[${this.name}] Disconnected`);
  }

  async takeMeasurement(userData) {
    const measurement = {
      weight: userData.weight,
      bodyFat: userData.bodyFat || this._calculateBodyFat(userData.weight),
      muscleMass: userData.muscleMass || this._calculateMuscleMass(userData.weight),
      bmi: this._calculateBMI(userData.weight, userData.height),
      waterPercentage: userData.waterPercentage || 60,
      timestamp: new Date()
    };

    this.measurements.push(measurement);
    await this.setState({
      ...measurement,
      lastMeasurement: measurement.timestamp
    });

    return measurement;
  }

  _calculateBMI(weight, height) {
    // height in inches, weight in lbs
    return ((weight / (height * height)) * 703).toFixed(1);
  }

  _calculateBodyFat(weight) {
    return (15 + Math.random() * 10).toFixed(1);
  }

  _calculateMuscleMass(weight) {
    return (weight * 0.35).toFixed(1);
  }

  getTrend(days = 7) {
    return this.measurements.slice(-days);
  }
}

module.exports = ScaleDevice;
