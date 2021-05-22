import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import {likesAndMatchesStyles as styles} from '../../Stylesheets/LikesAndMatches.css';
import Octicon from 'react-native-vector-icons/Octicons';

export const Profiles = () => {
  const Profile = () => {
    return (
      <ImageBackground
        style={styles.person}
        source={require('../../assets/casper.jpeg')}
        imageStyle={{borderRadius: 10, resizeMode: 'cover'}}>
        <View style={styles.nameAndAge}>
          <Text style={styles.suggestedUserName}>Casper, 1000</Text>
          <Octicon name="verified" size={20} color="#1e90ff" />
        </View>
      </ImageBackground>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.profiles}>
      <View style={styles.profileRow}>
        <Profile />
        <Profile />
      </View>
      <View style={styles.profileRow}>
        <Profile />
        <Profile />
      </View>
      <View style={styles.profileRow}>
        <Profile />
        <Profile />
      </View>
    </ScrollView>
  );
};
