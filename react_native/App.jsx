import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimelineScreen from './src/screens/TimelineScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          title: 'Qiita',
          headerStyle: {
            height: 90,
            backgroundColor: '#55C500',
          },
          headerTitleStyle: {
            fontSize: 20,
            color: 'white',
          },
        }}
      >
        <Tab.Screen name="Timeline" component={TimelineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
