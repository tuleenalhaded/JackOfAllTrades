class DeviceIntegrator {
  constructor(rl, companyName) {
    this.rl = rl;
    this.companyName = companyName;
    this.deviceConfig = {
      deviceType: '',
      capabilities: [],
      apiEndpoint: '',
      authMethod: 'oauth2'
    };
  }

  async start() {
    console.log('\n' + '═'.repeat(60));
    console.log('  🔌 DEVICE INTEGRATION WIZARD');
    console.log('═'.repeat(60) + '\n');
    console.log('  Add a new device type to the platform\n');
    console.log('  Available Templates:');
    console.log('  [1] Smart Home Appliance');
    console.log('  [2] Fitness/Health Device');
    console.log('  [3] Security Device');
    console.log('  [4] Entertainment Device');
    console.log('  [5] Custom Device\n');
    console.log('═'.repeat(60) + '\n');
    
    await this.selectTemplate();
  }

  async selectTemplate() {
    return new Promise((resolve) => {
      this.rl.question('Select device template (1-5): ', async (choice) => {
        console.clear();
        
        switch(choice.trim()) {
          case '1':
            await this.configureDevice('Smart Home Appliance', [
              'power_control', 'scheduling', 'energy_monitoring'
            ]);
            break;
          case '2':
            await this.configureDevice('Fitness/Health Device', [
              'data_tracking', 'goal_setting', 'sync_health_apps'
            ]);
            break;
          case '3':
            await this.configureDevice('Security Device', [
              'motion_detection', 'alerts', 'video_streaming'
            ]);
            break;
          case '4':
            await this.configureDevice('Entertainment Device', [
              'media_control', 'volume_control', 'playlist_management'
            ]);
            break;
          case '5':
            await this.configureCustomDevice();
            break;
          default:
            console.log('Invalid choice');
        }
        
        resolve();
      });
    });
  }

  async configureDevice(type, defaultCapabilities) {
    console.log('\n' + '═'.repeat(60));
    console.log(`  Configuring: ${type}`);
    console.log('═'.repeat(60) + '\n');
    
    this.deviceConfig.deviceType = type;
    this.deviceConfig.capabilities = defaultCapabilities;
    
    return new Promise((resolve) => {
      this.rl.question('Enter device model name: ', (model) => {
        this.rl.question('Enter API endpoint URL: ', (endpoint) => {
          this.deviceConfig.apiEndpoint = endpoint;
          
          console.log('\n  Default Capabilities:');
          defaultCapabilities.forEach((cap, i) => {
            console.log(`  ${i + 1}. ${cap}`);
          });
          
          this.rl.question('\nAdd more capabilities? (comma-separated, or Enter to skip): ', (caps) => {
            if (caps.trim()) {
              this.deviceConfig.capabilities.push(...caps.split(',').map(c => c.trim()));
            }
            
            this.showIntegrationSummary(model);
            resolve();
          });
        });
      });
    });
  }

  async configureCustomDevice() {
    console.log('\n  Custom Device Configuration\n');
    
    return new Promise((resolve) => {
      this.rl.question('Enter device type: ', (type) => {
        this.deviceConfig.deviceType = type;
        
        this.rl.question('Enter capabilities (comma-separated): ', (caps) => {
          this.deviceConfig.capabilities = caps.split(',').map(c => c.trim());
          
          this.rl.question('Enter API endpoint: ', (endpoint) => {
            this.deviceConfig.apiEndpoint = endpoint;
            this.showIntegrationSummary(type);
            resolve();
          });
        });
      });
    });
  }

  showIntegrationSummary(model) {
    console.log('\n' + '═'.repeat(60));
    console.log('  📋 INTEGRATION SUMMARY');
    console.log('═'.repeat(60) + '\n');
    console.log(`  Company: ${this.companyName}`);
    console.log(`  Device: ${model}`);
    console.log(`  Type: ${this.deviceConfig.deviceType}`);
    console.log(`  API: ${this.deviceConfig.apiEndpoint}`);
    console.log(`  Capabilities: ${this.deviceConfig.capabilities.length}`);
    this.deviceConfig.capabilities.forEach(cap => {
      console.log(`    • ${cap}`);
    });
    console.log('\n' + '═'.repeat(60) + '\n');
    
    this.rl.question('Deploy this integration? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        console.log('\n✓ Integration deployed successfully!\n');
        console.log('  Your device is now available to consumers.');
        console.log('  SDK documentation sent to your email.\n');
      } else {
        console.log('\n❌ Integration cancelled.\n');
      }
      
      setTimeout(() => {}, 2000);
    });
  }
}

module.exports = DeviceIntegrator;
