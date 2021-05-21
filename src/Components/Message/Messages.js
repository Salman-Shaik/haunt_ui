import React from 'react';
import {ScrollView} from 'react-native';
import {chatStyle as styles} from '../../Stylesheets/Chat.css';
import {Chat} from './Chat';

export const Messages = () => {
  return (
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
  );
};
