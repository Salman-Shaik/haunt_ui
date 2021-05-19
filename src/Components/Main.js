import React from 'react';
import {View} from 'react-native';
import {mainStyles as styles} from '../Stylesheets/Main.css';
import {Suggestions} from './Suggestions';

export const Main = () => {
  return (
    <View style={styles.main}>
      <Suggestions />
    </View>
  );
};
