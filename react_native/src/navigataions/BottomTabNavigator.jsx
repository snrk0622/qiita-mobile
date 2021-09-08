import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TimelineScreen from '../screens/TimelineScreen';
import SearchScreen from '../screens/SearchScreen';
import MypageScreen from '../screens/MypageScreen';
import Header from '../components/Header';
import SearchHeader from '../components/SearchHeader';
import MypageHeader from '../components/MypageHeader';

import user from '../../assets/data/User.json';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="clock" size={24} color={color} />;
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <Text style={{ color, fontSize: 10, fontWeight: 'bold' }}>タイムライン</Text>;
          },
          header: () => {
            return <Header />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="search" size={24} color={color} />;
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <Text style={{ color, fontSize: 10, fontWeight: 'bold' }}>検索</Text>;
          },
          header: () => {
            return <SearchHeader />;
          },
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="user-circle" size={24} color={color} />;
          },
          tabBarLabel: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <Text style={{ color, fontSize: 10, fontWeight: 'bold' }}>あなた</Text>;
          },
          header: () => {
            return <MypageHeader user={user} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
