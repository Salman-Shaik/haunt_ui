import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {userProfileStyle as styles} from '../Stylesheets/UserProfile.css';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const UserProfile = () => {
  return (
    <View style={styles.userProfile}>
      <View style={styles.header}>
        <Ionicon name="settings-sharp" size={30} color="#ffffff" />
        <FontAwesomeIcon name="power-off" size={30} color="#ff4444" />
      </View>
      <View style={styles.userInfo}>
        <Image
          style={styles.displayPicture}
          source={require('../assets/casper.jpeg')}
        />
        <View style={styles.suggestionDetails}>
          <View style={styles.nameAndAge}>
            <Text style={styles.suggestedUserName}>Casper, 1000</Text>
            <Octicon name="verified" size={20} color="#1e90ff" />
          </View>
          <Text style={styles.profession}>Chief Earth Ghost at Heaven</Text>
          <View style={styles.profileButtons}>
            <TouchableOpacity style={styles.profileButton}>
              <MaterialIcon name="post-add" size={32} color="#dddddd" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <MaterialIcon name="edit" size={32} color="#dddddd" />
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuOption}>
              <Ionicon name="options" size={24} color="#ffff22" />
              <Text style={styles.menuOptionText}>My Preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuOption}>
              <Ionicon name="ios-person-add" size={23} color="#ff6b91" />
              <Text style={styles.menuOptionText}>Invite Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuOption}>
              <Ionicon name="help-circle" size={30} color="#0cff04" />
              <Text style={styles.menuOptionText}>Need Help?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Update To Premium</Text>
      </TouchableOpacity>
    </View>
  );
};
