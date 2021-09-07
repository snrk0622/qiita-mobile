import React from 'react';
import { SafeAreaView } from 'react-native';

import ArticleFeedList from '../components/ArticleFeedList';
import ArticleFeedItem from '../components/ArticleFeedItem';

import articles from '../../assets/data/articles.json';

const TimelineScreen = () => {
  const renderFeedItem = ({ item }) => {
    return <ArticleFeedItem item={item} />;
  };

  return (
    <SafeAreaView>
      <ArticleFeedList data={articles} renderItem={renderFeedItem} />
    </SafeAreaView>
  );
};

export default TimelineScreen;
