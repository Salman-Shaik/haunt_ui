import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';
import {mainStyles} from './Main.css';

export const likesAndMatchesStyles = StyleSheet.create({
  likeAndMatches: {
    width: deviceWidth,
    height: mainStyles.main.height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileRow: {
    width: deviceWidth,
    height: 252,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabs: {
    height: deviceHeight * 0.09,
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#111111',
    borderBottomWidth: 2,
  },
  tab: {
    width: deviceWidth * 0.5,
    height: deviceHeight * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  selectedTab: {
    width: deviceWidth * 0.495,
    height: deviceHeight * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
  tabText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profiles: {
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  person: {
    width: 180,
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  nameAndAge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  suggestedUserName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 2,
  },
});
