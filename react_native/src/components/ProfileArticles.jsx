import React from 'react';
import { FlatList } from 'react-native';

import ArticleFeedItem from './ArticleFeedItem';

import data from '../../assets/data/articles.json';

const renderItem = ({ item }) => {
  return (
    <ArticleFeedItem item={item} />
  );
};

const ProfileArticles = () => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item.id; }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProfileArticles;
