import React from 'react';
import {View} from 'react-native';
import {mainStyles as styles} from '../Stylesheets/Main.css';
import {Suggestions} from './Suggestions/Suggestions';
import {Messages} from './Message/Messages';
import {LikesAndMatches} from './LikeAndMatch/LikesAndMatches';
import {UserProfile} from './UserProfile';

export const Main = ({isCurrentScreen, updateLocation}) => {
  return (
    <View style={styles.main}>
      {isCurrentScreen('Suggestions') && <Suggestions />}
      {isCurrentScreen('LikesAndMatches') && <LikesAndMatches />}
      {isCurrentScreen('Chat') && <Messages />}
      {isCurrentScreen('Profile') && <UserProfile />}
    </View>
  );
};
