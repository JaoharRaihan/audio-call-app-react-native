# Deployment Guide

## Option 1: GitHub Submission (Recommended)

1. **Initialize Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: React Native Audio Call App"
   ```

2. **Create GitHub Repository:**
   - Go to https://github.com
   - Create a new repository named "react-native-audio-call"
   - Don't initialize with README (we already have one)

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/react-native-audio-call.git
   git branch -M main
   git push -u origin main
   ```

4. **Configure Agora App ID (Important!):**
   - Before submitting, make sure to add your Agora App ID in `config.js`
   - Or provide instructions in your submission

## Option 2: Live Hosting

### Using Expo Publish (Easiest)

1. **Configure Agora App ID in `config.js`**

2. **Publish to Expo:**
   ```bash
   npx expo publish
   ```

3. **Share the Expo link** that's generated

### Using Netlify/Vercel (Web Version)

1. **Build for web:**
   ```bash
   npx expo build:web
   ```

2. **Deploy the `web-build` folder** to Netlify or Vercel

## Testing Instructions

Before submission, test the app:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Agora App ID** in `config.js`

3. **Start the app:**
   ```bash
   ./start.sh
   # or
   npx expo start
   ```

4. **Test on device:**
   - Use Expo Go app to scan QR code
   - Test the audio call functionality
   - Verify 3-minute timer works

## Submission Checklist

- [ ] Agora App ID configured
- [ ] App runs without errors
- [ ] Audio calls work between two devices
- [ ] 3-minute timer functions correctly
- [ ] Mute/unmute works
- [ ] README.md is complete
- [ ] Code is clean and commented
- [ ] Repository is public (if using GitHub)

## Note for Reviewers

- The app requires two devices/users to test the calling functionality
- Make sure to provide your own Agora App ID for testing
- The app is designed for development/testing purposes
