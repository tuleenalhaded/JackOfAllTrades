const readline = require('readline');
const ConsumerApp = require('./consumer/ConsumerApp');
const CompanyPortal = require('./company/CompanyPortal');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showWelcome() {
  console.clear();
  console.log('\n' + '═'.repeat(60));
  console.log('  🏠 UNIVERSAL IoT CONTROL PLATFORM');
  console.log('═'.repeat(60));
  console.log('\n  Welcome! Please select your role:\n');
  console.log('  [1] 👤 Consumer - Control my devices');
  console.log('  [2] 🏢 Company - Manage device integrations');
  console.log('  [3] ❌ Exit\n');
  console.log('═'.repeat(60) + '\n');
}

function promptUser() {
  showWelcome();
  
  rl.question('Enter your choice (1-3): ', async (answer) => {
    console.clear();
    
    switch(answer.trim()) {
      case '1':
        const consumerApp = new ConsumerApp(rl);
        await consumerApp.start();
        rl.close();
        break;
        
      case '2':
        const companyPortal = new CompanyPortal(rl);
        await companyPortal.start();
        rl.close();
        break;
        
      case '3':
        console.log('\n👋 Goodbye!\n');
        rl.close();
        break;
        
      default:
        console.log('\n❌ Invalid choice. Please try again.\n');
        setTimeout(promptUser, 1500);
    }
  });
}

promptUser();
