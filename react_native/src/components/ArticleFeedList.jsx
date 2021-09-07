import React from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { arrayOf, shape, func } from 'prop-types';

const ArticleFeedList = ({ data, renderItem }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item.id; }}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl tintColor="rgba(51, 51, 51, 0.1)" />}
      style={styles.container}
    />
  );
};

ArticleFeedList.propTypes = {
  data: arrayOf(shape()).isRequired,
  renderItem: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 7,
  },
});

export default ArticleFeedList;
