# Audio Call App - React Native

A real-time audio calling application built with React Native and Expo, powered by Agora SDK.

## 🚀 Features

- Real-time audio calling
- Mute/unmute functionality
- Call timer with auto-disconnect
- Clean, modern UI
- Cross-platform (iOS & Android)

## 📱 Download & Install

### For Android Users:
1. Download the APK from the build link (provided after building)
2. Enable "Install from unknown sources" in your Android settings
3. Install the APK file
4. Open the app and start calling!

### For iOS Users:
Contact the developer to be added to the TestFlight beta program.

## 🛠 Development

This app is built with:
- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform
- **Agora SDK** - Real-time communication
- **EAS Build** - Build and deployment service

## 📦 Building the App

### Prerequisites:
```bash
npm install -g @expo/cli eas-cli
```

### Build Commands:
```bash
# Build APK for Android (best for sharing)
eas build --platform android --profile preview

# Build for iOS development
eas build --platform ios --profile development

# Build for both platforms
eas build --platform all --profile preview
```

### Quick Reference Commands:
```bash
# Quick Android APK for sharing
eas build --platform android --profile preview

# Both platforms
eas build --platform all --profile preview

# Check build status
eas build:list
```

### Sharing Your Build:
1. After build completion, EAS provides a download link
2. Share this link with testers
3. Android users can install directly
4. iOS users need to be added to your Apple Developer account

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start the development server
npx expo start

# Run on Android
npx expo start --android

# Run on iOS
npx expo start --ios
```

## 📋 Configuration

Make sure to update `config.js` with your actual Agora App ID for production builds:

```javascript
export const AGORA_CONFIG = {
  APP_ID: 'your-actual-agora-app-id',
  CHANNEL_NAME: 'test-channel',
  MAX_CALL_DURATION: 300 // 5 minutes
};
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## � Current Build Status

Your app is currently being built! You can monitor the progress at:
- **Build URL**: https://expo.dev/accounts/jaoharraihan/projects/audio-call-app/builds/25004d36-9cce-498b-bf43-a6b034f3c9ec
- **Status**: Building Android APK for sharing

### Quick Commands:
```bash
# Check all your builds
eas build:list

# Build a new Android APK
eas build --platform android --profile preview

# Build for both platforms
eas build --platform all --profile preview
```

## �📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React Native and Expo
