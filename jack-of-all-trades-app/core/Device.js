/**
 * Base Device class - all IoT devices extend this
 */
class Device {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.manufacturer = config.manufacturer;
    this.type = config.type;
    this.state = {};
    this.capabilities = [];
  }

  // Core methods all devices must implement
  async connect() {
    throw new Error('connect() must be implemented by device');
  }

  async disconnect() {
    throw new Error('disconnect() must be implemented by device');
  }

  async getState() {
    return this.state;
  }

  async setState(newState) {
    this.state = { ...this.state, ...newState };
    await this.sync();
  }

  async sync() {
    // Override to sync with physical device
    console.log(`[${this.name}] State synced:`, this.state);
  }

  getCapabilities() {
    return this.capabilities;
  }
}

module.exports = Device;
