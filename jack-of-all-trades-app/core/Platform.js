/**
 * Platform Manager - orchestrates all devices
 */
class Platform {
  constructor() {
    this.devices = new Map();
    this.subscriptions = new Map();
  }

  // Register a manufacturer's device type
  registerDevice(device) {
    this.devices.set(device.id, device);
    console.log(`✓ Registered: ${device.manufacturer} ${device.name}`);
  }

  getDevice(id) {
    return this.devices.get(id);
  }

  getAllDevices() {
    return Array.from(this.devices.values());
  }

  // Subscription management for manufacturers
  addSubscription(manufacturer, tier) {
    this.subscriptions.set(manufacturer, {
      tier,
      active: true,
      devicesAllowed: tier === 'premium' ? Infinity : 10
    });
  }

  verifySubscription(manufacturer) {
    const sub = this.subscriptions.get(manufacturer);
    return sub && sub.active;
  }
}

module.exports = Platform;
