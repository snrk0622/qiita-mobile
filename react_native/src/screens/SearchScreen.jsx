import React from 'react';
import {
  View, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import SearchHeader from '../components/SearchHeader';

const SearchScreen = () => {
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => { Keyboard.dismiss(); }}>
      <View>
        <SearchHeader />
        <Text>searchScreen</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
