import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { number } from 'prop-types';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const ArticleDetailFooter = ({ likesCount, commentsCount }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionItem}>
        <FontAwesome5 name="heart" style={styles.icon} />
        <Text style={styles.number}>{likesCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionItem}>
        <Feather name="pocket" style={styles.activeIcon} />
        <Text style={styles.activeNumber}>{likesCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionItem}>
        <FontAwesome5 name="comment" style={styles.icon} />
        <Text style={styles.number}>{commentsCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

ArticleDetailFooter.propTypes = {
  likesCount: number.isRequired,
  commentsCount: number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 36,
    paddingHorizontal: 14,
    backgroundColor: '#F9F9F9',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.12)',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 7,
    fontSize: 28,
    color: 'rgba(51, 51, 51, 0.1)',
  },
  activeIcon: {
    marginRight: 7,
    fontSize: 28,
    color: '#55C500',
  },
  number: {
    color: 'rgba(51, 51, 51, 0.1)',
  },
  activeNumber: {
    color: '#55C500',
  },
});

export default ArticleDetailFooter;
