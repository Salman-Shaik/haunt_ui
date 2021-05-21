import React from 'react';
import {View} from 'react-native';
import {suggestionStyle as styles} from '../../Stylesheets/Suggestion.css';
import {Suggestion} from './Suggestion';

export const Suggestions = () => {
  return (
    <View style={styles.suggestions}>
      <Suggestion />
    </View>
  );
};
