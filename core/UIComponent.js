/**
 * Base UI Component - manufacturers customize this for their brand
 */
class UIComponent {
  constructor(device) {
    this.device = device;
    this.theme = {
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      fontFamily: 'Arial, sans-serif'
    };
  }

  setTheme(theme) {
    this.theme = { ...this.theme, ...theme };
  }

  // Render control interface (CLI demo, but could be React/Vue/etc)
  render() {
    throw new Error('render() must be implemented by UI component');
  }

  // Handle user interactions
  async handleAction(action, params) {
    throw new Error('handleAction() must be implemented by UI component');
  }
}

module.exports = UIComponent;
