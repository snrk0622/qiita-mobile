import { FontAwesome5 } from '@expo/vector-icons';
import {
  number, shape, string,
} from 'prop-types';
import React from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
} from 'react-native';

const TagFeedItem = ({ item }) => {
  const tagImage = () => {
    if (item.icon_url) {
      return (
        <Image source={{ uri: item.icon_url }} style={styles.tagImage} />
      );
    }
    return (
      <View style={styles.tagImage}>
        <FontAwesome5 name="tag" style={styles.tagIcon} />
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container}>
      { tagImage() }
      <View style={styles.tagInfo}>
        <Text style={styles.tagId}>{item.id}</Text>
        {/* eslint-disable-next-line */}
        <Text style={styles.itemsCount}>記事{item.items_count}件</Text>
      </View>
    </TouchableOpacity>
  );
};

TagFeedItem.propTypes = {
  item: shape({
    followers_count: number,
    icon_url: string,
    id: string,
    items_count: number,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tagImage: {
    width: 50,
    height: 50,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: 'rgba(51, 51, 51, 0.1)',
    borderWidth: 1,
  },
  tagIcon: {
    fontSize: 20,
    color: 'rgba(51, 51, 51, 0.1)',
  },
  tagInfo: {
    justifyContent: 'center',
  },
  tagId: {
    marginBottom: 3.5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemsCount: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 0.6)',
  },
});

export default TagFeedItem;
