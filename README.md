# audio-call-app

A simple React Native Expo application for one-to-one audio calls using Agora SDK with a 3-minute call duration limit.

## Features

- One-to-one audio calls
- 3-minute maximum call duration with countdown timer
- Audio mute/unmute functionality
- Modern black UI design
- Built with Expo

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   npx expo start
   ```

3. **Test the app:**
   - Use Expo Go app on your mobile device
   - Scan the QR code to run the app

## How to Use

1. Tap "Start Call" to begin the audio call
2. The timer shows the remaining call time (max 3 minutes)
3. Use the microphone button to mute/unmute audio
4. Tap the phone button to end the call

## Technologies Used

- React Native
- Expo
- Agora RTC SDK

## Project Structure

```
├── App.js              # Main application component
├── config.js           # Agora configuration
├── package.json        # Dependencies and scripts
├── app.json           # Expo configuration
└── assets/            # App assets
```
