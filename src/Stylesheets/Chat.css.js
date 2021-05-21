import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';
import {mainStyles} from './Main.css';

export const chatStyle = StyleSheet.create({
  likeAndMatches: {
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chat: {
    height: deviceHeight * 0.11,
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222222',
    borderStyle: 'solid',
    borderBottomColor: '#111111',
    borderBottomWidth: 2,
  },
  profilePic: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  chatDetails: {
    height: deviceHeight * 0.09,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#aaaaaa',
  },
});
