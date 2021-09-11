import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { arrayOf, func, shape } from 'prop-types';

import ArticleFeedList from '../components/ArticleFeedList';
import ArticleFeedItem from '../components/ArticleFeedItem';

import { fetchTimeline } from '../modules/timeline/action';

// import articles from '../../assets/data/articles.json';

const renderFeedItem = ({ item }) => {
  return <ArticleFeedItem item={item} />;
};

const TimelineScreen = ({ fetchArticles, articles }) => {
  const hoge = 'hoge';
  useEffect(() => {
    fetchArticles();
  }, [hoge]);
  return (
    <SafeAreaView>
      <ArticleFeedList data={articles} renderItem={renderFeedItem} />
    </SafeAreaView>
  );
};

TimelineScreen.propTypes = {
  fetchArticles: func.isRequired,
  articles: arrayOf(shape()),
};

TimelineScreen.defaultProps = {
  articles: [],
};

const mapStateToProps = (state) => {
  return {
    articles: state.timeline.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => { dispatch(fetchTimeline()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineScreen);
