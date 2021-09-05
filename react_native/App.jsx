import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TimelineScreen from './src/screens/TimelineScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timeline" component={TimelineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
