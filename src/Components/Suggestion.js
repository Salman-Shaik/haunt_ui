import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {suggestionStyle as styles} from '../Stylesheets/Suggestion.css';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export const Suggestion = () => {
  return (
    <>
      <ImageBackground
        style={styles.suggestionCard}
        imageStyle={{resizeMode: 'cover'}}
        source={require('../assets/casper.jpeg')}>
        <View style={styles.suggestionDetails}>
          <View style={styles.nameAndAge}>
            <Text style={styles.suggestedUserName}>Casper, 1000</Text>
            <MaterialIcon name="verified-user" size={20} color="#1e90ff" />
          </View>
          <Text style={styles.profession}>Chief Earth Ghost at Heaven</Text>
        </View>
      </ImageBackground>
      <View style={styles.suggestionActions}>
        <TouchableOpacity style={styles.action}>
          <EntypoIcon name="cross" size={40} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeAction}>
          <FontAwesomeIcon name="heart" size={28} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </>
  );
};
