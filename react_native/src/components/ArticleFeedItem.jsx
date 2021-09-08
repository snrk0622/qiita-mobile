import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, number, string, bool, arrayOf,
} from 'prop-types';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

const ArticleFeedItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate('ArticleDetail', { title: item.title }); }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={{ uri: item.user.profile_image_url }} style={styles.userImage} />
        <View>
          {/* eslint-disable-next-line */}
          <Text style={styles.userId}>@{item.user.id}</Text>
          <Text style={styles.updated_date}>
            {formatDate(item.updated_at)}
            に更新
          </Text>
        </View>
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
        <View style={styles.tags}>
          <FontAwesome5 name="tags" style={styles.tagsIcon} />
          <Text style={styles.tagsText}>{item.tags.map((tag) => { return tag.name; }).join(', ')}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="heart" style={styles.footerItemIcon} />
          <Text style={styles.footerItemText}>{item.likes_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Feather name="pocket" style={styles.footerItemIconActive} />
          <Text style={styles.footerItemTextActive}>{item.likes_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="comment" style={styles.footerItemIcon} />
          <Text style={styles.footerItemText}>{item.comments_count}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="external-link-alt" style={styles.linkIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

ArticleFeedItem.propTypes = {
  item: shape({
    rendered_body: string,
    body: string,
    coedeting: bool,
    comments_count: number,
    created_at: string,
    group: shape(),
    id: string,
    likes_count: number,
    private: bool,
    reactions_count: number,
    tags: arrayOf(shape()),
    title: string,
    updated_at: string,
    url: string,
    user: shape(),
    page_views_count: number,
    team_membership: shape(),
  }).isRequired,
};

const formatDate = (date) => {
  return date.split('T')[0].split('-').join('').replace(/(\d{4})(\d{2})(\d{2})/, '$1年$2月$3日');
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 3.5,
    padding: 14,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  userImage: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 22.5,
  },
  userId: {
    marginBottom: 7,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  updated_date: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  contents: {
    marginBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(51, 51, 51, 0.1)',
  },
  title: {
    marginBottom: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  body: {
    height: 100,
    overflow: 'hidden',
    color: 'rgba(51, 51, 51, 0.6)',
  },
  tags: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  tagsIcon: {
    marginRight: 7,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  tagsText: {
    color: 'rgba(51, 51, 51, 0.6)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerItemIcon: {
    marginRight: 7,
    fontSize: 24,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  footerItemIconActive: {
    marginRight: 7,
    fontSize: 24,
    color: '#55C500',
  },
  footerItemText: {
    color: 'rgba(51, 51, 51, 0.6)',
  },
  footerItemTextActive: {
    color: '#55C500',
  },
  linkIcon: {
    fontSize: 16,
    color: 'rgba(51, 51, 51, 0.6)',
  },
});

export default ArticleFeedItem;
