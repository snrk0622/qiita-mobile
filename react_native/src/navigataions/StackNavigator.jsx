import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import ArticleDetail from '../screens/ArticleDetail';
import ArticleDetailHeader from '../components/ArticleDetailHeader';

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
        options={{
          header: ({ route, back }) => {
            return back ? <ArticleDetailHeader title={route.params.title} /> : undefined;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
