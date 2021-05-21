import React from 'react';
import {Image, Text, View} from 'react-native';
import {chatStyle as styles} from '../../Stylesheets/Chat.css';

export const Chat = () => {
  return (
    <View style={styles.chat}>
      <Image
        source={require('../../assets/casper.jpeg')}
        style={styles.profilePic}
      />
      <View style={styles.chatDetails}>
        <Text style={styles.name}>Casper</Text>
        <Text style={styles.lastMessage}>How You Doin' ?</Text>
      </View>
    </View>
  );
};
