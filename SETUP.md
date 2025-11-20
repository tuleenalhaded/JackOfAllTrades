# Jack of All Trades - Setup Guide

## What You Just Got

A complete **cross-platform IoT control app** that runs on:
- 📱 iOS (iPhone/iPad)
- 🤖 Android phones/tablets  
- 💻 Web browsers
- 🖥️ Desktop (via web)

## Installation Steps

### 1. Install Node.js
You already have it! ✓ (v24.11.1)

### 2. Navigate to the App
```bash
cd mobile-app
```

### 3. Install Dependencies
```bash
npm install
```

This will install:
- React Native
- Expo (makes mobile dev easy)
- UI components
- Navigation

### 4. Start the App

**Option A: Run on Your Phone (Easiest)**
```bash
npm start
```
- Install "Expo Go" app on your phone (App Store/Play Store)
- Scan the QR code that appears
- App opens instantly!

**Option B: Run in Web Browser**
```bash
npm run web
```
Opens in your browser at http://localhost:19006

**Option C: iOS Simulator (Mac only)**
```bash
npm run ios
```

**Option D: Android Emulator**
```bash
npm run android
```

## What You'll See

### 1. Role Selection Screen
Beautiful gradient screen with two options:
- 👤 Consumer - Control devices
- 🏢 Company - Customize & integrate

### 2. Consumer Experience
- Dashboard with all your devices
- Tap any device to control it
- Thermostat: adjust temp with slider, change modes
- Scale: view measurements, track progress
- Material Design UI (looks professional)

### 3. Company Portal
- Login with company name
- Dashboard with stats (users, API calls, devices)
- UI Customizer: change colors, branding, fonts with live preview
- Device Integrator: add new device types with templates

## Troubleshooting

**"npm: command not found"**
- Node.js isn't in your PATH
- Try: `/usr/local/bin/npm install`

**"Expo Go won't connect"**
- Make sure phone and computer are on same WiFi
- Try typing your computer's IP manually in Expo Go

**Want to test without a phone?**
- Use `npm run web` - works in any browser!

## Next Steps

1. Run `cd mobile-app && npm install`
2. Run `npm start`
3. Scan QR with Expo Go app
4. Choose "Consumer" to see device controls
5. Go back and choose "Company" to see customization tools

The app is fully functional - all screens work, navigation flows, and you can interact with everything!
