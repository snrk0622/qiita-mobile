import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { arrayOf, shape, func } from 'prop-types';

import { fetchTimeline } from '../modules/timeline/action';

const ArticleFeedList = ({ data, renderItem, fetchArticles }) => {
  const onRefresh = () => {
    fetchArticles();
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item.id; }}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl tintColor="rgba(51, 51, 51, 0.1)" onRefresh={onRefresh} />}
      style={styles.container}
    />
  );
};

ArticleFeedList.propTypes = {
  data: arrayOf(shape()).isRequired,
  renderItem: func.isRequired,
  fetchArticles: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
  },
});

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: () => { dispatch(fetchTimeline()); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFeedList);
