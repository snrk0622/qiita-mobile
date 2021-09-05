import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const ArticleFeedList = ({ data, renderItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item.id; }}
    />
  );
};

export default ArticleFeedList;