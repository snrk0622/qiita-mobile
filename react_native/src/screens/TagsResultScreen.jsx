import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import data from '../../assets/data/tags.json';
import TagFeedItem from '../components/TagFeedItem';

const renderItem = ({ item }) => {
  return (
    <TagFeedItem item={item} />
  );
};

const UsersResultScreen = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item.id; }}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl tintColor="rgba(51, 51, 51, 0.1)" />}
    />
  );
};

export default UsersResultScreen;
