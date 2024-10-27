# 🚗 Rideflow - React Native Project 🚀
This is a mobile app Rideflow, built using React Native and multiple technologies to ensure user experience, real-time locations, and payments. The project provides a foundational platform for developing full-stack mobile development skills.

## 📸 Screenshots
<p align="center">
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/1.jpeg" alt="Photo 1" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/2.jpeg" alt="Photo 2" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/3.jpeg" alt="Photo 3" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/4.jpeg" alt="Photo 4" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/5.jpeg" alt="Photo 5" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/6.jpeg" alt="Photo 6" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/7.jpeg" alt="Photo 7" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/8.jpeg" alt="Photo 8" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/9.jpeg" alt="Photo 9" width="150"/>
  <img src="https://raw.githubusercontent.com/Radu1409/Rideflow/refs/heads/main/assets/media/10.jpeg" alt="Photo 10" width="150"/>
</p>

## 📝 Project Description
Rideflow is an application that allows users to book rides, view live locations, pay for rides, and manage the user experience in a manner similar to the original Uber app. With a responsive interface optimized for both Android and iOS, it demonstrates the ability to integrate and utilize modern technologies in mobile application development.

## 🔋 Features

- ✅ **Authentication and Registration**: Easy user sign-in and registration process.
- ✅ **Detailed Profile**: Management of user account information.
- ✅ **Recent Rides**: Quick access to the last rides taken.
- ✅ **Ride History**: Complete list of all booked rides.
- ✅ **Live Map**: Real-time location with markers on the map using Google Maps.
- ✅ **Car Selection on Map**: Select available cars nearby.
- ✅ **Google Places Autocomplete**: Automatic suggestions for entered locations.
- ✅ **Ride Confirmation and Details**: Detailed information about the ride (estimated time, price).
- ✅ **Stripe Payment**: Secure payments through various methods.
- ✅ **Google oAuth Authentication**: Easy sign-in through Google.
- ✅ **Notifications and Alerts**: Notifications for booking status.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- zustand
- Clerk
- Tailwind CSS

## 📑 Contents
- 🌟 [Getting Started](#getting-started)
- 🛠️ [Installation Commands](#installation-commands)
- 🎬 [Running the App](#running-the-app)
- 📸 [Presentation Images](#presentation-images)
- 🎥 [Presentation Video](#presentation-video)

## 🌟 Getting Started
To run the Rideflow app on your local device, follow the steps below:

### Project Initialization
```bash
npx create-expo-app@latest ./
```
### Setting Node.js

```bash
nvm install 20.16.0
nvm use 20.16.0
```
### Running the Server
```bash
npm start # or npx expo start -c (to clear also the cache)
```

## 🛠️ Installation Commands

### Installing TailwindCSS and NativeWind
```bash
npm install nativewind
npm install --save-dev tailwindcss@3.3.2
npm tailwindcss init
```

### Other Required Dependencies
```bash
npm cache clean --force
npm install react-native-safe-area-context
npx expo lint
```
### Installing Prettier and ESLint
```bash
npx expo install -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### After the above command:
```bash
Navigate to Settings -> Languages & Frameworks -> Javascript -> Code Quality Tools -> ESLint and select the manual ESLint configuration.
Set Settings -> Tools -> Actions on Save and check Run eslint --fix.
```

### Installing Other Libraries
```bash
npm install react-native-swiper
npx expo install react-dom react-native-web @expo/metro-runtime
npm install @clerk/clerk-expo
npm install expo-secure-store
npm install react-native-modal
npm install expo-local-authentication
npm install expo-auth-session
npm install @neondatabase/serverless
npm install react-native-maps react-native-maps-directions
npm install zustand
npm install expo-location
npm install react-native-google-places-autocomplete
npm install react-native-get-random-values
npm install react-native-gesture-handler
npm install @gorhom/bottom-sheet
npm install stripe --save
npm install @stripe/stripe-react-native
npm install expo-linking
```
## 🎬 Running the App
To start the development server:
```bash
npx expo start -c # `-c` option for clear cache
```

Open the Expo Go app on your device and scan the displayed QR code to view the project.

## 📸 Presentation Images
View screenshots and configuration examples for the Uber Clone project.

## 🎥 Presentation Video
Watch the demo video of the Uber Clone app to explore its features.

