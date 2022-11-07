import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native';
import notifee from '@notifee/react-native';

export default function App() {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'This is the main body content of the notification!',
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
      ios: {
        attachments: [
          /*{
            // iOS resource
            url: 'local-image.png',
            thumbnailHidden: true,
          },
          {
            // Local file path.
            url: '/Path/on/device/to/local/file.mp4',
            thumbnailTime: 3, // optional
          },
          {
            // React Native asset.
            url: require('./assets/my-image.gif'),
          },*/
          {
            // Remote image
            url: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg',
          },
        ],
      },    
    });
  }

  return (
    <View>
      <Text>Send Notifications</Text>
      <Text>Send Notifications</Text>
      <Text>Send Notifications</Text>
      <Text>Send Notifications</Text>
      <Text>Send Notifications</Text>
      <Text>Send Notifications</Text>
      <Button title="Display Notifications" onPress={() => onDisplayNotification()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
