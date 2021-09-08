import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import ArticleDetail from '../screens/ArticleDetail';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ArticleDetail"
        component={ArticleDetail}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
