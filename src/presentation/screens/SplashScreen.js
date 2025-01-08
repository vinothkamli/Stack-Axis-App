import {Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SPLASH_SCREEN_STYLE} from '../styles/SplashScreenStyle';

const SplashScreen = () => {
  const navigation = useNavigation();
  const SPLASH_TIMEOUT = 3000;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, SPLASH_TIMEOUT);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={SPLASH_SCREEN_STYLE.container}>
      <Image
        source={require('../../core/values/assets/images/Logo.png')}
        style={SPLASH_SCREEN_STYLE.headerLogo}
      />

      <View style={SPLASH_SCREEN_STYLE.innerContainer}>
        <Text style={SPLASH_SCREEN_STYLE.text}>Investing for Everybody</Text>
        <Text style={SPLASH_SCREEN_STYLE.text1}>
          Investing is not as complicated as you think, you just need to know
          where to start.
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
