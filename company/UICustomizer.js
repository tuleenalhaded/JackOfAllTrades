class UICustomizer {
  constructor(rl, companyName) {
    this.rl = rl;
    this.companyName = companyName;
    this.config = {
      brandName: companyName,
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      logo: 'default.png',
      fontFamily: 'Arial'
    };
  }

  async start() {
    console.log('\n' + '═'.repeat(60));
    console.log('  🎨 UI CUSTOMIZATION STUDIO');
    console.log('═'.repeat(60) + '\n');
    console.log('  Customize how your devices appear to consumers\n');
    console.log('  Current Settings:');
    console.log(`  • Brand Name: ${this.config.brandName}`);
    console.log(`  • Primary Color: ${this.config.primaryColor}`);
    console.log(`  • Secondary Color: ${this.config.secondaryColor}`);
    console.log(`  • Font: ${this.config.fontFamily}\n`);
    console.log('═'.repeat(60) + '\n');
    
    await this.customizeBranding();
  }

  async customizeBranding() {
    return new Promise((resolve) => {
      this.rl.question('Enter brand name (or press Enter to skip): ', (brand) => {
        if (brand.trim()) this.config.brandName = brand;
        
        this.rl.question('Enter primary color hex (e.g., #ff6b35): ', (color) => {
          if (color.trim()) this.config.primaryColor = color;
          
          this.rl.question('Enter secondary color hex: ', (color2) => {
            if (color2.trim()) this.config.secondaryColor = color2;
            
            this.rl.question('Enter font family (e.g., Roboto, Arial): ', (font) => {
              if (font.trim()) this.config.fontFamily = font;
              
              this.showPreview();
              resolve();
            });
          });
        });
      });
    });
  }

  showPreview() {
    console.log('\n' + '═'.repeat(60));
    console.log('  👁️  PREVIEW - Consumer View');
    console.log('═'.repeat(60));
    console.log(`\n  ${this.config.brandName}`);
    console.log(`  Colors: ${this.config.primaryColor} / ${this.config.secondaryColor}`);
    console.log(`  Font: ${this.config.fontFamily}`);
    console.log('\n  ┌────────────────────────────────────┐');
    console.log(`  │  ${this.config.brandName.padEnd(34)} │`);
    console.log('  ├────────────────────────────────────┤');
    console.log('  │  Device: Smart Thermostat          │');
    console.log('  │  Status: 🟢 Connected              │');
    console.log('  │  Temperature: 72°F                 │');
    console.log('  └────────────────────────────────────┘\n');
    console.log('═'.repeat(60) + '\n');
    
    this.rl.question('Save this configuration? (y/n): ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        console.log('\n✓ UI configuration saved successfully!\n');
        console.log('  Your custom branding will appear to all consumers');
        console.log('  using your devices.\n');
      } else {
        console.log('\n❌ Configuration discarded.\n');
      }
      
      setTimeout(() => {}, 2000);
    });
  }
}

module.exports = UICustomizer;
