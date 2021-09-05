import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { string, arrayOf, func } from 'prop-types';

const NavList = ({ data, renderItem }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => { return item; }}
      style={styles.navList}
    />
  );
};

NavList.propTypes = {
  data: arrayOf(string).isRequired,
  renderItem: func.isRequired,
};

const styles = StyleSheet.create({
  navList: {
    height: 40,
    paddingVertical: 5,
    backgroundColor: '#333333',
  },
});

export default NavList;
