import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';
import {mainStyles} from './Main.css';

export const chatStyle = StyleSheet.create({
  header: {
    width: deviceWidth,
    height: deviceHeight * 0.08,
    paddingTop: deviceHeight * 0.018,
    paddingLeft: 15,
    backgroundColor: '#222222',
    borderBottomWidth: 1,
    borderBottomColor: '#191919',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingLeft: 15,
    paddingBottom: deviceHeight * 0.013,
  },
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
