import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import ArticleFeedItem from '../components/ArticleFeedItem';

import data from '../../assets/data/articles.json';

const renderItem = ({ item }) => {
  return (
    <ArticleFeedItem item={item} />
  );
};

const ArticlesResultScreen = () => {
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

export default ArticlesResultScreen;
