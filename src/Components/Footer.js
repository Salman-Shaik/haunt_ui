import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {footerStyles as styles} from '../Stylesheets/Footer.css';

export const Footer = ({updateLocation}) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => updateLocation('Suggestions')}>
        <MaterialCommunityIcon name="ghost" size={33} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateLocation('LikesAndMatches')}>
        <MaterialCommunityIcon
          name="heart-multiple"
          size={32}
          color="#ffffff"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateLocation('Chat')}>
        <EntypoIcon name="chat" size={32} color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => updateLocation('Profile')}>
        <IoniconsIcon name="person" size={32} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};
