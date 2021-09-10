import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

const AlertMessage = ({ updatedAt }) => {
  const now = new Date();
  // eslint-disable-next-line
  const today = now.getFullYear().toString() + ('0'+(now.getMonth()+1)).slice(-2) + ('0'+now.getDate()).slice(-2);
  const fmtUpdatedAt = updatedAt.split('T')[0].split('-').join('');
  const howLongAgo = Math.floor((today - fmtUpdatedAt) / 10000);
  if (howLongAgo >= 1) {
    return (
      <View style={styles.container}>
        <FontAwesome5 name="exclamation-triangle" style={styles.icon} />
        {/* eslint-disable-next-line */}
        <Text style={styles.message}>この記事は最終更新日から{howLongAgo}年以上が経過しています。</Text>
      </View>
    );
  }
  return (null);
};

AlertMessage.propTypes = {
  updatedAt: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#FBE69E',
  },
  message: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.87)',
  },
  icon: {
    marginRight: 7,
    color: '#CA832A',
  },
});

export default AlertMessage;
