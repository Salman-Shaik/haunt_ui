import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {chatStyle as styles} from '../../Stylesheets/Chat.css';
import {Chat} from './Chat';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const Messages = () => {
  return (
    <View>
      <View style={styles.header}>
        <EntypoIcon name="chat" size={26} color="#6db9ff" />
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <ScrollView contentContainerStyle={styles.messages}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </ScrollView>
    </View>
  );
};
