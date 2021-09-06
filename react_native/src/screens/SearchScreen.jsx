import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ArticlesResultScreen from './ArticlesResultScreen';
import UsersResultScreen from './UsersResultScreen';
import TagsResultScreen from './TagsResultScreen';

const TopTab = createMaterialTopTabNavigator();

const SearchScreen = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#333333' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
      }}
    >
      <TopTab.Screen
        name="投稿"
        component={ArticlesResultScreen}
      />
      <TopTab.Screen
        name="ユーザー"
        component={UsersResultScreen}
      />
      <TopTab.Screen
        name="タグ"
        component={TagsResultScreen}
      />
    </TopTab.Navigator>
  );
};

export default SearchScreen;
