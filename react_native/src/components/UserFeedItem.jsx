import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import {
  string, number, shape, oneOf, bool,
} from 'prop-types';

const UserFeedItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: item.profile_image_url }} style={styles.userImage} />
      <View style={styles.userInfo}>
        {/* eslint-disable-next-line */}
        <Text style={styles.userId}>@{item.id}</Text>
        {/* eslint-disable-next-line */}
        <Text style={styles.itemsCount}>{item.items_count}件の記事を公開中</Text>
      </View>
    </TouchableOpacity>
  );
};

UserFeedItem.propTypes = {
  item: shape({
    description: string,
    facebook_id: oneOf([string, null]),
    followees_count: number,
    followers_count: number,
    github_login_name: oneOf([string, null]),
    id: string,
    items_count: number,
    linkedin_id: oneOf([string, null]),
    location: oneOf([string, null]),
    name: oneOf([string, null]),
    organization: oneOf([string, null]),
    permanent_id: number,
    profile_image_url: string,
    team_only: bool,
    twitter_screen_name: oneOf([string, null]),
    website_url: oneOf([string, null]),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  userImage: {
    width: 50,
    height: 50,
    marginRight: 14,
    borderRadius: 25,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userId: {
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

export default UserFeedItem;
