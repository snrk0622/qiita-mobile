import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import ProfileArticles from '../components/ProfileArticles';

const TopTab = createMaterialTopTabNavigator();

const UserDetail = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: { backgroundColor: '#55C500' },
        tabBarShowLabel: false,
        tabBarShowIcon: true,
      }}
    >
      <TopTab.Screen
        name="記事"
        component={ProfileArticles}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="poll-h" size={24} color={color} />;
          },
        }}
      />
      <TopTab.Screen
        name="ユーザー"
        component={ProfileArticles}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="heart" size={24} color={color} />;
          },
        }}
      />
      <TopTab.Screen
        name="タグ"
        component={ProfileArticles}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <Feather name="pocket" size={24} color={color} />;
          },
        }}
      />
    </TopTab.Navigator>
  );
};

export default UserDetail;
