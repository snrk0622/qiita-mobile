import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { func, string } from 'prop-types';

const SNSButton = ({ name, link, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.snsIcon}>
      <FontAwesome name={name} size={14 * 1.5} color={link ? 'rgba(51, 51, 51, 0.6)' : 'rgba(51, 51, 51, 0.1)'} />
    </TouchableOpacity>
  );
};

SNSButton.propTypes = {
  name: string.isRequired,
  link: string,
  onPress: func,
};

SNSButton.defaultProps = {
  link: 'true',
  onPress: () => { },
};

const styles = StyleSheet.create({
  snsIcon: {
    fontSize: 14 * 1.5,
    color: 'rgba(51, 51, 51, 0.6)',
  },
});

export default SNSButton;
