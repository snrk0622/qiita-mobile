import React from 'react';
import {
  View, Text, SafeAreaView, StyleSheet,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textArea}>
          <Text style={styles.title}>Qiita</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#55C500',
  },
  textArea: {
    height: 30,
    marginVertical: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
  },
});

export default Header;
