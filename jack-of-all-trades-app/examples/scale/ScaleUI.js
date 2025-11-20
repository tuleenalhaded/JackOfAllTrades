const UIComponent = require('../../core/UIComponent');

/**
 * Custom UI for fitness scale - different manufacturer, different brand
 */
class ScaleUI extends UIComponent {
  constructor(device) {
    super(device);
    // Different branding for fitness company
    this.setTheme({
      primaryColor: '#00d4aa',
      secondaryColor: '#6b5b95',
      brandName: 'FitTrack Elite'
    });
  }

  render() {
    const state = this.device.state;
    console.log('\n' + '='.repeat(50));
    console.log(`  💪 ${this.theme.brandName}`);
    console.log('='.repeat(50));
    console.log(`  Device: ${this.device.name}`);
    console.log(`  Status: ${state.connected ? '🟢 Connected' : '🔴 Offline'}`);
    console.log('─'.repeat(50));
    
    if (state.lastMeasurement) {
      console.log(`  Weight:        ${state.weight} ${state.unit}`);
      console.log(`  BMI:           ${state.bmi}`);
      console.log(`  Body Fat:      ${state.bodyFat}%`);
      console.log(`  Muscle Mass:   ${state.muscleMass} ${state.unit}`);
      console.log(`  Water:         ${state.waterPercentage}%`);
      console.log(`  Last Reading:  ${state.lastMeasurement.toLocaleString()}`);
    } else {
      console.log('  No measurements yet - step on scale to begin');
    }
    
    console.log('='.repeat(50) + '\n');
  }

  async handleAction(action, params) {
    switch(action) {
      case 'measure':
        await this.device.takeMeasurement(params);
        break;
      case 'viewTrend':
        this.showTrend(params.days);
        return;
      default:
        console.log(`Unknown action: ${action}`);
    }
    this.render();
  }

  showTrend(days) {
    const trend = this.device.getTrend(days);
    console.log(`\n📊 ${days}-Day Weight Trend:`);
    trend.forEach((m, i) => {
      console.log(`  Day ${i + 1}: ${m.weight} lbs (BMI: ${m.bmi})`);
    });
    console.log();
  }
}

module.exports = ScaleUI;
