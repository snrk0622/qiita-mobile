import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, func } from 'prop-types';

const NavListItem = ({ item, selected, onPress }) => {
  const styleContainer = item === selected ? styles.containerActive : styles.container;
  const styleText = item === selected ? styles.textActive : styles.text;
  return (
    <TouchableOpacity onPress={onPress} style={styleContainer}>
      <Text style={styleText}>{item}</Text>
    </TouchableOpacity>
  );
};

NavListItem.propTypes = {
  item: string.isRequired,
  selected: string.isRequired,
  onPress: func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 15,
  },
  containerActive: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  textActive: {
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavListItem;
