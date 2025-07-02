# React Native Audio Call App

A simple React Native Expo application for one-to-one audio calls using Agora SDK with a 3-minute call duration limit.

## Features

- One-to-one audio calls using Agora SDK
- 3-minute maximum call duration with countdown timer
- Audio mute/unmute functionality
- Simple and clean UI
- Built with Expo for easy development and deployment

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- An Agora App ID (get one from [Agora Console](https://console.agora.io/))

## Setup Instructions

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Agora App ID:**
   - Open `App.js`
   - Replace `'YOUR_AGORA_APP_ID'` with your actual Agora App ID
   - You can get a free App ID from [Agora Console](https://console.agora.io/)

4. **Run the application:**
   ```bash
   npx expo start
   ```

5. **Test the app:**
   - Use Expo Go app on your mobile device, or
   - Run on an emulator/simulator

## How to Use

1. Enter a channel name (both users must use the same channel name)
2. Tap "Join Call" to start the audio call
3. The timer will show the remaining call time (max 3 minutes)
4. Use the mute button to toggle audio on/off
5. Tap "Leave Call" to end the call

## Getting Agora App ID

1. Visit [Agora Console](https://console.agora.io/)
2. Sign up for a free account
3. Create a new project
4. Copy the App ID from your project dashboard
5. Paste it in `App.js` replacing `'YOUR_AGORA_APP_ID'`

## Technologies Used

- React Native
- Expo
- Agora RTC SDK
- React Hooks for state management

## Project Structure

```
├── App.js              # Main application component
├── package.json        # Dependencies and scripts
├── app.json           # Expo configuration
├── assets/            # App assets (icons, splash screen)
└── README.md          # This file
```

## Notes

- This app is designed for development and testing purposes
- For production use, implement proper authentication and channel management
- The 3-minute limit is enforced client-side and will automatically end the call
- Both users need to be in the same channel to communicate

## Troubleshooting

- Make sure you have a valid Agora App ID
- Check your internet connection
- Ensure both devices have microphone permissions
- Try different channel names if connection fails

## License

This project is for educational/assessment purposes.
