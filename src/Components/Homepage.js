import React from 'react';
import {View} from 'react-native';
import {Footer} from './Footer';
import {Main} from './Main';
import {homepageStyles as styles} from '../Stylesheets/Homepage.css';

export const Homepage = () => {
  return (
    <View style={styles.homepage}>
      <Main />
      <Footer />
    </View>
  );
};
