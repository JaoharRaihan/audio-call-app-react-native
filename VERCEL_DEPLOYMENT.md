# Deploy Your Audio Call App to Vercel

## 🚀 Quick Deployment Steps

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy your app:**
   ```bash
   npm run deploy
   ```
   
   Or manually:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Website

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with GitHub, GitLab, or Bitbucket
3. **Click "New Project"**
4. **Import your repository** or upload the project folder
5. **Vercel will automatically detect** it's an Expo/React app
6. **Deploy!**

## 📁 Project Structure for Deployment

Your project is now ready with:
- ✅ `dist/` folder with built web files
- ✅ `vercel.json` configuration file
- ✅ Build scripts in `package.json`

## 🔧 Build Commands

```bash
# Build for web
npm run build

# Deploy to Vercel
npm run deploy

# Or manually build and deploy
npx expo export -p web
vercel --prod
```

## 🌐 What You'll Get

After deployment, you'll receive:
- **Live URL** (e.g., `https://your-app-name.vercel.app`)
- **Preview URLs** for testing
- **Automatic HTTPS**
- **Global CDN**
- **Zero configuration** deployment

## 📱 Features Available on Web

Your deployed app will have:
- ✅ Full UI functionality
- ✅ 3-minute countdown timer
- ✅ Mute/unmute simulation
- ✅ Call start/end simulation
- ✅ Responsive design
- ✅ Modern black theme

## 📝 Note

The web version runs in **demo mode** with simulated audio calls. For real audio functionality, users would need to use the mobile app with Expo Go or a development build.

## 🎯 Perfect for Submission

This web deployment is ideal for:
- ✅ **Task demonstration**
- ✅ **Portfolio showcase**
- ✅ **Easy sharing** via URL
- ✅ **Assessment review**

Your app is now ready to be deployed and shared! 🎉
