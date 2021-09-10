import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import ArticleDetail from '../screens/ArticleDetail';
import ArticleDetailHeader from '../components/ArticleDetailHeader';
import UserDetail from '../screens/UserDetail';
import UserDetailHeader from '../components/UserDetailHeader';

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
            return back ? <ArticleDetailHeader item={route.params.item} /> : undefined;
          },
        }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{
          header: ({ route, back }) => {
            return back ? <UserDetailHeader user={route.params.user} /> : undefined;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
