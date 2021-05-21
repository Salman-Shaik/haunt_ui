import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {likesAndMatchesStyles as styles} from '../../Stylesheets/LikesAndMatches.css';
import {Profiles} from './Profiles';

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
