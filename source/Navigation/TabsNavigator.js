import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens';
import {hp, responsiveFontSize, wp} from '../utils/responsiveSizes';
import {BLACK, MEDIUM_BLACK, ORANGE, WHITE} from '../constants/colors';
import {Platform, Text} from 'react-native';
import {HomeIcon, ProfileIcon} from '../assets';
import {regular, semibold} from '../constants/fonts';

const Tab = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: ORANGE,
        tabBarStyle: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          backgroundColor: WHITE,
          ...Platform.select({
            ios: {
              shadowColor: BLACK,
              shadowOffset: {width: 0, height: 7.38},
              shadowOpacity: 0.4,
              shadowRadius: 16,
            },
            android: {
              elevation: 8,
            },
          }),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {
                      color: MEDIUM_BLACK,
                      fontSize: responsiveFontSize(12),
                      fontFamily: semibold,
                    }
                  : {
                      color: MEDIUM_BLACK,
                      fontSize: responsiveFontSize(12),
                      fontFamily: regular,
                    }
              }>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} stroke={color} />,
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {
                      color: MEDIUM_BLACK,
                      fontSize: responsiveFontSize(12),
                      fontFamily: semibold,
                    }
                  : {
                      color: MEDIUM_BLACK,
                      fontSize: responsiveFontSize(12),
                      fontFamily: regular,
                    }
              }>
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
