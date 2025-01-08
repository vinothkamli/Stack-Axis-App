import {StyleSheet} from 'react-native';
import {COLOR_CONSTNATS} from '../../core/values/constants/ColorConstant';
import {FontFamily} from '../../core/values/constants/FontFamily';

export const SPLASH_SCREEN_STYLE = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR_CONSTNATS.backgroundColor,
  },
  innerContainer: {
    marginTop: 30,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 44,
    textAlign: 'center',
    fontFamily: FontFamily.Poppins_SemiBold,
    color: COLOR_CONSTNATS.textColor,
    marginTop: 20,
  },
  text1: {
    fontSize: 14,
    color: COLOR_CONSTNATS.whiteColor,
    fontFamily: FontFamily.Poppins_Regular,
    marginTop: 10,
    textAlign: 'center',
  },
  headerLogo: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});
