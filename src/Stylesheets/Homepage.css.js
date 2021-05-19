import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from './helper';

export const homepageStyles = StyleSheet.create({
  homepage: {
    height: deviceHeight,
    width: deviceWidth,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#111111',
  },
});
