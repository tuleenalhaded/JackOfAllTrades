const UICustomizer = require('./UICustomizer');
const DeviceIntegrator = require('./DeviceIntegrator');

class CompanyPortal {
  constructor(rl) {
    this.rl = rl;
    this.companyName = '';
    this.subscription = null;
  }

  async start() {
    await this.login();
    this.showPortal();
  }

  async login() {
    return new Promise((resolve) => {
      console.log('\n' + '═'.repeat(60));
      console.log('  🏢 JACK OF ALL TRADES - COMPANY PORTAL');
      console.log('═'.repeat(60) + '\n');
      
      this.rl.question('Enter your company name: ', (name) => {
        this.companyName = name;
        console.log(`\n✓ Welcome, ${this.companyName}!\n`);
        setTimeout(() => {
          console.clear();
          resolve();
        }, 1000);
      });
    });
  }

  showPortal() {
    console.log('\n' + '═'.repeat(60));
    console.log(`  🏢 ${this.companyName.toUpperCase()} - COMPANY PORTAL`);
    console.log('═'.repeat(60));
    console.log('\n  What would you like to do?\n');
    console.log('  [1] 🎨 Customize Device UI');
    console.log('  [2] 🔌 Integrate New Device Type');
    console.log('  [3] 📊 View Integration Status');
    console.log('  [4] 💳 Manage Subscription');
    console.log('  [0] 🔙 Logout');
    console.log('\n' + '═'.repeat(60) + '\n');
    
    this.promptAction();
  }

  promptAction() {
    this.rl.question('Select option (0-4): ', async (answer) => {
      console.clear();
      
      switch(answer.trim()) {
        case '1':
          await this.customizeUI();
          break;
        case '2':
          await this.integrateDevice();
          break;
        case '3':
          this.viewStatus();
          break;
        case '4':
          this.manageSubscription();
          break;
        case '0':
          console.log('\n👋 Logged out successfully!\n');
          process.exit(0);
          break;
        default:
          console.log('\n❌ Invalid choice. Try again.\n');
          setTimeout(() => {
            console.clear();
            this.showPortal();
          }, 1500);
      }
    });
  }

  async customizeUI() {
    const customizer = new UICustomizer(this.rl, this.companyName);
    await customizer.start();
    console.clear();
    this.showPortal();
  }

  async integrateDevice() {
    const integrator = new DeviceIntegrator(this.rl, this.companyName);
    await integrator.start();
    console.clear();
    this.showPortal();
  }

  viewStatus() {
    console.log('\n' + '═'.repeat(60));
    console.log(`  📊 ${this.companyName} - INTEGRATION STATUS`);
    console.log('═'.repeat(60) + '\n');
    console.log('  Active Devices: 2');
    console.log('  Total Users: 1,247');
    console.log('  API Calls (24h): 45,892');
    console.log('  Subscription: Premium ✓');
    console.log('  Status: Active 🟢\n');
    console.log('═'.repeat(60) + '\n');
    
    this.rl.question('Press Enter to continue...', () => {
      console.clear();
      this.showPortal();
    });
  }

  manageSubscription() {
    console.log('\n' + '═'.repeat(60));
    console.log('  💳 SUBSCRIPTION MANAGEMENT');
    console.log('═'.repeat(60) + '\n');
    console.log('  Current Plan: Premium');
    console.log('  Monthly Cost: $499/month');
    console.log('  Devices Allowed: Unlimited');
    console.log('  API Rate Limit: 1M calls/day');
    console.log('  Support: Priority 24/7\n');
    console.log('  Next Billing: Dec 20, 2025\n');
    console.log('═'.repeat(60) + '\n');
    
    this.rl.question('Press Enter to continue...', () => {
      console.clear();
      this.showPortal();
    });
  }
}

module.exports = CompanyPortal;
