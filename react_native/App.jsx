import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TimelineScreen from './src/screens/TimelineScreen';
import SearchScreen from './src/screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerTitle: 'Qiita',
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
        <Tab.Screen
          name="Timeline"
          component={TimelineScreen}
          options={{
            tabBarIcon: (focused) => {
              const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
              return <FontAwesome5 name="clock" size={24} color={color} />;
            },
            tabBarLabel: (focused) => {
              const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
              return <Text style={{ color, fontSize: 10, fontWeight: 'bold' }}>タイムライン</Text>;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: (focused) => {
              const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
              return <FontAwesome5 name="search" size={24} color={color} />;
            },
            tabBarLabel: (focused) => {
              const color = focused ? '#55C500' : 'rgba(51, 51, 51, 0.1)';
              return <Text style={{ color, fontSize: 10, fontWeight: 'bold' }}>タイムライン</Text>;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#333333',
    backgroundColor: '#F6F6F4',
  },
});
