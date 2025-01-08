import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import PorfolioScreen from '../../presentation/screens/PorfolioScreen';
import LearnScreen from '../../presentation/screens/LearnScreen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLOR_CONSTNATS} from '../values/constants/ColorConstant';
import {FontFamily} from '../values/constants/FontFamily';
import DiscoverScreen from '../../presentation/screens/DiscoverScreen';
import AccountScreen from '../../presentation/screens/AccountScreen';

const Tab = createBottomTabNavigator();

export const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLOR_CONSTNATS.primaryColor,
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: 'white',
        tabBarLabelStyle: {
          fontSize: 9,
          fontFamily: FontFamily.Poppins_Medium,
        },
        tabBarStyle: {
          backgroundColor: 'black',
          height: 60,
          bottom: 20,
          borderRadius: 30,
          overflow: 'hidden',
          position: 'absolute',
          marginHorizontal: 35,
        },
      }}>
      <Tab.Screen
        name="Portfolio"
        component={PorfolioScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="linechart"
              size={size}
              color={focused ? COLOR_CONSTNATS.primaryColor : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="compass"
              size={size}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Feather
              name="book-open"
              size={size}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome
              name="user-o"
              size={size}
              color={focused ? 'green' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
