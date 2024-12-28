# Mindfulness App

A simple mindfulness app where users can:

- Select meditation music.
- Set a meditation timer.
- Start the meditation session.

https://github.com/user-attachments/assets/a011a103-1de0-4b6a-ae7c-017c8c52c505


- Set reminders with push notifications to stay consistent.

## Features

1. **Meditation Music**
   - Choose from a curated list of meditation tracks to enhance your mindfulness sessions.

2. **Meditation Timer**
   - Set the desired duration for your meditation session.
   - Automatically stop the music when the timer ends.

3. **Push Notifications**
   - Schedule daily reminders for meditation.
   - Notifications include customizable times to fit your routine.
  
   - 

## Installation

1. Clone the repository:

   bash
   git clone https://github.com/your-username/mindfulness-app.git
   cd mindfulness-app
   

2. Install dependencies:

   bash
   npm install
   

3. Start the development server:

   bash
   npm start
   

4. Scan the QR code with Expo Go (on Android/iOS) to run the app on your device.

## Dependencies

- **React Native**: Core framework for building mobile applications.
- **Expo**: Platform for faster React Native development.
- **react-native-modal-datetime-picker**: For selecting meditation times.
- **expo-notifications**: For scheduling and managing push notifications.

## Usage

1. Launch the app on your mobile device.
2. Select a meditation track from the home screen.
3. Set the desired meditation duration using the time picker.
4. Press play to start the meditation.
5. Optionally, schedule reminders to meditate at your preferred time.

## Project Structure


.
├── components/
│   └── MusicPlayer.js    # Component for playing meditation music
├── screens/
│   ├── HomeScreen.js     # Main screen with meditation options
│   ├── TimerScreen.js    # Timer setup and management
│   └── ReminderScreen.js # Push notification scheduling
├── styles/
│   └── layout.styles.js  # Shared styles for the app
├── App.js                # Entry point of the application
└── package.json          # Project dependencies and scripts


## Notifications Setup

To enable push notifications:

1. Install `expo-notifications`:

   bash
   expo install expo-notifications
   

2. Request permissions in your app:

   javascript
   import * as Notifications from 'expo-notifications';

   useEffect(() => {
     const requestPermissions = async () => {
       const { status } = await Notifications.requestPermissionsAsync();
       if (status !== 'granted') {
         alert('Permission for notifications not granted!');
       }
     };

     requestPermissions();
   }, []);
   

3. Schedule a notification:

   javascript
   await Notifications.scheduleNotificationAsync({
     content: {
       title: "Meditation Reminder",
       body: "It's time for your daily meditation!",
     },
     trigger: {
       hour: 8,
       minute: 0,
       repeats: true,
     },
   });
   


---

Enjoy your journey to mindfulness and tranquility! 🌿
