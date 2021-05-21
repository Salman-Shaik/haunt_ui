import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {likesAndMatchesStyles as styles} from '../Stylesheets/LikesAndMatches.css';

export const Profiles = () => {
  const Profile = () => {
    return (
      <ImageBackground
        style={styles.person}
        source={require('../assets/casper.jpeg')}
        imageStyle={{borderRadius: 10, resizeMode: 'cover'}}>
        <View style={styles.nameAndAge}>
          <Text style={styles.suggestedUserName}>Casper, 1000</Text>
          <MaterialIcon name="verified-user" size={20} color="#1e90ff" />
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
export const LikesAndMatches = () => {
  let [selectedItem, setSelectedItem] = useState('LIKES');
  let isLikes = selectedItem === 'LIKES';
  return (
    <View style={styles.likeAndMatches}>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => setSelectedItem('LIKES')}
          style={isLikes ? styles.selectedTab : styles.tab}>
          <Text style={styles.tabText}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedItem('MATCHES')}
          style={!isLikes ? styles.selectedTab : styles.tab}>
          <Text style={styles.tabText}>Matches</Text>
        </TouchableOpacity>
      </View>
      {isLikes ? <Profiles /> : <Profiles />}
    </View>
  );
};
