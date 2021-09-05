import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import NavList from '../components/NavList';
import NavListItem from '../components/NavListItem';
import ArticleFeedList from '../components/ArticleFeedList';
import ArticleFeedItem from '../components/ArticleFeedItem';

import articles from '../../assets/data/dammy.json';

const TimelineScreen = () => {
  const tags = ['React', 'Vue', 'Laravel', 'TypeScript'];

  const [selected, setSelected] = useState('All');

  const renderNavItem = ({ item }) => {
    return <NavListItem item={item} selected={selected} onPress={() => { setSelected(item); }} />;
  };

  const renderFeedItem = ({ item }) => {
    return <ArticleFeedItem item={item} />;
  };

  return (
    <SafeAreaView>
      <NavList data={['All', ...tags]} renderItem={renderNavItem} />
      <ArticleFeedList data={articles} renderItem={renderFeedItem} />
    </SafeAreaView>
  );
};

export default TimelineScreen;
