import React from 'react';
import { FlatList, RefreshControl } from 'react-native';

import data from '../../assets/data/users.json';
import UserFeedItem from '../components/UserFeedItem';

const renderItem = ({ item }) => {
  return (
    <UserFeedItem item={item} />
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
