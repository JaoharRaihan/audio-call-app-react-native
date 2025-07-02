#!/bin/bash

# Audio Call App - Setup and Run Script

echo "🎵 React Native Audio Call App Setup"
echo "===================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if Agora App ID is configured
if grep -q "YOUR_AGORA_APP_ID" config.js; then
    echo ""
    echo "⚠️  IMPORTANT: Please configure your Agora App ID"
    echo "   1. Open config.js"
    echo "   2. Replace 'YOUR_AGORA_APP_ID' with your actual App ID"
    echo "   3. Get your App ID from: https://console.agora.io/"
    echo ""
fi

# Start the development server
echo "🚀 Starting Expo development server..."
echo "   - Use Expo Go app to scan the QR code"
echo "   - Or run on an emulator"
echo ""

npx expo start
