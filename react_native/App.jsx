import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import StackNavigator from './src/navigataions/StackNavigator';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#333333',
    backgroundColor: '#F6F6F4',
  },
});
