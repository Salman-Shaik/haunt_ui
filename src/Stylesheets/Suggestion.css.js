import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';
import {mainStyles} from './Main.css';

export const suggestionStyle = StyleSheet.create({
  suggestions: {
    width: deviceWidth,
    height: mainStyles.main.height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionCard: {
    height: deviceHeight * 0.8,
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  suggestionActions: {
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  nameAndAge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 10,
  },
  suggestedUserName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 2,
  },
  profession: {
    fontSize: 15,
    color: '#ffffff',
    marginLeft: 10,
    marginRight: 2,
  },
  action: {
    backgroundColor: '#222222',
    borderRadius: 50,
    padding: 5,
  },
  likeAction: {
    backgroundColor: '#222222',
    borderRadius: 50,
    paddingTop: 13,
    paddingLeft: 11.5,
    paddingRight: 11.5,
  },
});
