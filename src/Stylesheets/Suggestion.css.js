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
    height: deviceHeight * 0.87,
    width: deviceWidth * 0.95,
    borderRadius: 10,
    backgroundColor: '#999999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  suggestionActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  suggestionDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestedUserName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 2,
  },
});
