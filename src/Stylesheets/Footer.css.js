import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';

export const footerStyles = StyleSheet.create({
  footer: {
    height: deviceHeight * 0.07,
    width: deviceWidth,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222222',
    alignSelf: 'flex-end',
  },
});
