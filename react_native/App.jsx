import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigataions/StackNavigator';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#333333',
    backgroundColor: '#F6F6F4',
  },
});
