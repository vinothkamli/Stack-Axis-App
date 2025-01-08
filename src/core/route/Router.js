import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../../presentation/screens/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabBar from './BottomTabbar';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="SplashScreens"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreens" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
