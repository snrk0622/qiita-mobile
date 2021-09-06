import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ArticlesResultScreen from '../screens/ArticlesResultScreen';

const TopTab = createMaterialTopTabNavigator();

const SearchResults = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <TopTab.Screen name="Articles" component={ArticlesResultScreen} options={{ tabBarLabel: 'Profile' }} />
      <TopTab.Screen name="Users" component={ArticlesResultScreen} />
      {/* <Tab.Screen name="Tags" /> */}
    </TopTab.Navigator>
  );
};

export default SearchResults;
