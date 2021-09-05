import React, { useState } from 'react';
import {
  Text, SafeAreaView, StyleSheet,
} from 'react-native';

import NavList from '../components/NavList';
import NavListItem from '../components/NavListItem';

const TimelineScreen = () => {
  const tags = ['All', 'React', 'Vue', 'Laravel', 'TypeScript'];

  const [selected, setSelected] = useState(tags[0]);

  const renderItem = ({ item }) => {
    return <NavListItem item={item} selected={selected} onPress={() => { setSelected(item); }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavList data={tags} renderItem={renderItem} />
      <Text>TimelineScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F4',
  },
});

export default TimelineScreen;
