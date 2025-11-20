# Jack of All Trades - Mobile App

**One App. All Your Devices.**

A beautiful cross-platform mobile and desktop app for controlling all your IoT devices.

## Features

### For Consumers 👤
- Control all smart devices from one beautiful interface
- Real-time device status and control
- Intuitive, user-friendly design
- Works on iOS, Android, and Web

### For Companies 🏢
- Easy device integration wizard
- Full UI customization (colors, branding, fonts)
- Analytics dashboard
- Subscription management

## Quick Start

### Install Dependencies
```bash
cd mobile-app
npm install
```

### Run on Different Platforms

**iOS (requires Mac)**
```bash
npm run ios
```

**Android**
```bash
npm run android
```

**Web Browser**
```bash
npm run web
```

**Development Server**
```bash
npm start
```

Then scan the QR code with Expo Go app on your phone!

## Tech Stack
- React Native (cross-platform)
- Expo (easy deployment)
- React Native Paper (Material Design UI)
- React Navigation (routing)

## Project Structure
```
mobile-app/
├── src/
│   └── screens/
│       ├── RoleSelectionScreen.js    # Choose Consumer or Company
│       ├── consumer/
│       │   ├── ConsumerHomeScreen.js  # Device dashboard
│       │   └── DeviceControlScreen.js # Control individual devices
│       └── company/
│           ├── CompanyLoginScreen.js
│           ├── CompanyDashboardScreen.js
│           ├── UICustomizerScreen.js  # Brand customization
│           └── DeviceIntegratorScreen.js # Add devices
├── App.js                             # Main navigation
└── package.json
```

## Screenshots

### Consumer Experience
- Beautiful device cards with real-time status
- Intuitive controls (sliders, buttons, toggles)
- Clean, modern Material Design

### Company Portal
- Professional dashboard with analytics
- Visual UI customizer with live preview
- Device integration wizard with templates

## Next Steps
1. Install Expo Go on your phone
2. Run `npm start` in the mobile-app directory
3. Scan the QR code
4. Choose Consumer or Company role
5. Explore the app!
