import React from 'react';
import {View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {footerStyles as styles} from '../Stylesheets/Footer.css';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <MaterialCommunityIcon name="ghost" size={33} color="#ffffff" />
      <EntypoIcon name="chat" size={32} color="#ffffff" />
      <IoniconsIcon name="person" size={32} color="#ffffff" />
    </View>
  );
};
