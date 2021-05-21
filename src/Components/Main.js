import React from 'react';
import {View} from 'react-native';
import {mainStyles as styles} from '../Stylesheets/Main.css';
import {Suggestions} from './Suggestions';
import {Messages} from './Messages';
import {LikesAndMatches} from './LikesAndMatches';

export const Main = () => {
  return (
    <View style={styles.main}>
      {/*<Suggestions />*/}
      <LikesAndMatches />
      {/*<Messages />*/}
    </View>
  );
};
