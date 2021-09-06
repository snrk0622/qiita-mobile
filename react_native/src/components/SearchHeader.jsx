import React from 'react';
import {
  View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchBox}>
          <FontAwesome5 name="search" style={styles.searchBoxIcon} />
          <TextInput
            autoCapitalize="none"
            clearButtonMode="while-editing"
            enablesReturnKeyAutomatically
            selectionColor="#55C500"
            placeholder="キーワードを入力"
            placeholderTextColor="rgba(51, 51, 51, 0.3)"
            style={styles.searchBoxInput}
          />
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="sliders-h" style={styles.searchSettingIcon} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#55C500',
  },
  safeAreaView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
    marginRight: 14,
    paddingLeft: 14,
    paddingRight: 7,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchBoxIcon: {
    fontSize: 16,
    color: 'rgba(51, 51, 51, 0.3)',
  },
  searchBoxInput: {
    flex: 1,
    paddingLeft: 7,
    fontSize: 16,
    color: '#333333',
  },
  searchSettingIcon: {
    fontSize: 20,
    color: 'white',
  },
});

export default SearchHeader;
