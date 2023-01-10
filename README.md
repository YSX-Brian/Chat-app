# Chat-app
A chat app made using React Native for Android and iOS.
Users can chat by sending messages, images, and their location via an interface built with Gifted Chat. 

### Technologies Used:
React Native  
Expo  
Google Firebase  

### Features
-Users begin on the start page where they can enter their name and choose a background color for their chatroom.   
-The chatroom allows users to send text messages and includes an action button which gives more options: pick a photo to send from the gallery, open the camera to take a photo, and send the user's geolocation.   
-Received messages and media are also accessible offline.   

### Dependencies
    "@react-native-async-storage/async-storage": "^1.17.11",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-community/netinfo": "9.3.5",
    "@react-navigation/native": "^6.0.16",
    "@react-navigation/stack": "^6.3.7",
    "expo": "~47.0.8",
    "expo-location": "~15.0.1",
    "expo-status-bar": "~1.4.2",
    "firebase": "^8.2.3",
    "prop-types": "^15.8.1",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-gifted-chat": "^1.0.4",
    "react-native-maps": "1.3.2",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-native-svg": "13.4.0",
    "react-navigation": "^4.4.4",
    "expo-permissions": "~14.0.0",
    "expo-image-picker": "~14.0.2"

### User Guide
Install Expo CLI and download Expo Go, the mobile client app.  
[Expo Installation Directions](https://docs.expo.dev/get-started/installation/#expo-cli)  

Install Android Studio.   
[Android Studio Installation Directions](https://developer.android.com/studio/install)  

Create or access your account on Google Firebase.   
[Google Firebase Main Page](https://firebase.google.com/)  

Go to the console, create a new project, and start in test mode for the fastest setup. Follow instructions below for further setup.  
[Installing the SDK and initializing Firebase](https://firebase.google.com/docs/web/setup)  

Make sure to add your own `config` data from your own project (click the gear next to project overview, go to project settings, and scroll down to the SDK setup and configuration section).  

Reference the collection in the same file.   
`this.referenceMessages = firebase.firestore().collection('YOUR_PROJECT_NAME_HERE');`  
  
Install all other project dependencies using Node Package Manager.  

Use `expo start` and follow the instructions to launch the app either on your phone or emulator.   