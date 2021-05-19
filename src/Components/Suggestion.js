import React from 'react';
import {Text, View} from 'react-native';
import {suggestionStyle as styles} from '../Stylesheets/Suggestion.css';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Suggestion = () => {
  return (
    <View style={styles.suggestionCard}>
      <View style={styles.suggestionDetails}>
        <Text style={styles.suggestedUserName}>Casper, 1000</Text>
        <MaterialIcon name="verified-user" size={20} color="#1e90ff" />
      </View>
      <View style={styles.suggestionActions}>
        <EntypoIcon name="cross" size={40} color="#ffffff" />
        <EntypoIcon name="heart" size={32} color="#ffffff" />
      </View>
    </View>
  );
};
