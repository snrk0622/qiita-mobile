import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import ArticlesResultScreen from './ArticlesResultScreen';
import UsersResultScreen from './UsersResultScreen';
import TagsResultScreen from './TagsResultScreen';

const TopTab = createMaterialTopTabNavigator();

const MypageScreen = () => {
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
        component={ArticlesResultScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="poll-h" size={24} color={color} />;
          },
        }}
      />
      <TopTab.Screen
        name="ユーザー"
        component={UsersResultScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
            return <FontAwesome5 name="heart" size={24} color={color} />;
          },
        }}
      />
      <TopTab.Screen
        name="タグ"
        component={TagsResultScreen}
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

export default MypageScreen;
