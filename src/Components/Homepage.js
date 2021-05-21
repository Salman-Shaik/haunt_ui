import React, {useState} from 'react';
import {View} from 'react-native';
import {Footer} from './Footer';
import {Main} from './Main';
import {homepageStyles as styles} from '../Stylesheets/Homepage.css';

export const Homepage = () => {
  const [currentScreen, setCurrentScreen] = useState('Suggestions');

  const isCurrentScreen = (screen) => {
    return currentScreen === screen;
  };
  const updateLocation = (screen) => {
    setCurrentScreen(screen);
  };
  return (
    <View style={styles.homepage}>
      <Main isCurrentScreen={isCurrentScreen} updateLocation={updateLocation}/>
      <Footer isCurrentScreen={isCurrentScreen} updateLocation={updateLocation}/>
    </View>
  );
};
