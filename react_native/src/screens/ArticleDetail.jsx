import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  ScrollView, View, StyleSheet, useWindowDimensions, Text, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RenderHtml from 'react-native-render-html';
import AlertMessage from '../components/AlertMessage';

import formatDate from '../utils/formatDate';

const ArticleDetail = () => {
  const { item } = useRoute().params;
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <AlertMessage updatedAt={item.updated_at} />
      <View style={styles.header}>
        <View style={styles.headerUserInfo}>
          <Image source={{ uri: item.user.profile_image_url }} style={styles.headerUserImage} />
          {/* eslint-disable-next-line */}
          <Text style={styles.headerUserName}>@{item.user.id}</Text>
          {/* eslint-disable-next-line */}
          <Text style={styles.updated_at}>が{formatDate(item.updated_at)}に更新</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.tags}>
          <FontAwesome5 name="tags" style={styles.tagsIcon} />
          <Text style={styles.tagsText}>{item.tags.map((tag) => { return tag.name; }).join(', ')}</Text>
        </View>
      </View>
      <RenderHtml
        contentWidth={width}
        source={{ html: item.rendered_body }}
        baseStyle={baseStyles.base}
        tagsStyles={tagsStyles}
        classesStyles={classesStyles}
      />
      <View style={styles.footer}>
        <View style={styles.footerUserInfo}>
          <Image source={{ uri: item.user.profile_image_url }} style={styles.footerUserImage} />
          <View style={styles.footerUserText}>
            {/* eslint-disable-next-line */}
            { item.user.name ? <Text style={styles.footerUserName}>{item.user.name}</Text> : undefined }
            {/* eslint-disable-next-line */}
            <Text style={styles.footerUserId}>@{item.user.id}</Text>
            {/* eslint-disable-next-line */}
            { item.user.description ? <Text style={styles.footerUserDesc}>{item.user.description}</Text> : undefined }
            <View style={styles.footerUserBtns}>
              <TouchableOpacity style={styles.userFollowBtn}>
                <Text style={styles.userFollowText}>フォロー</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcon}>
                <FontAwesome name="link" size={fontSize * 1.5} color={item.user.website_url ? 'rgba(51, 51, 51, 0.6)' : 'rgba(51, 51, 51, 0.1)'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcon}>
                <FontAwesome name="github" size={fontSize * 1.5} color={item.user.github_login_name ? 'rgba(51, 51, 51, 0.6)' : 'rgba(51, 51, 51, 0.1)'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcon}>
                <FontAwesome name="twitter" size={fontSize * 1.5} color={item.user.twitter_screen_name ? 'rgba(51, 51, 51, 0.6)' : 'rgba(51, 51, 51, 0.1)'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcon}>
                <FontAwesome name="facebook" size={fontSize * 1.5} color={item.user.facebook_id ? 'rgba(51, 51, 51, 0.6)' : 'rgba(51, 51, 51, 0.1)'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.snsIcon}>
                <FontAwesome name="feed" size={fontSize * 1.5} color="rgba(51, 51, 51, 0.6)" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const fontSize = 14;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    padding: 14,
  },
  headerUserInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUserImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  headerUserName: {
    marginHorizontal: 3.5,
    fontWeight: 'bold',
    color: '#333333',
  },
  updated_at: {
    color: 'rgba(51, 51, 51, 0.6)',
  },
  title: {
    marginVertical: fontSize,
    fontSize: fontSize * 2,
    fontWeight: 'bold',
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
    padding: 14,
    paddingBottom: fontSize * 10,
  },
  footerUserInfo: {
    flexDirection: 'row',
  },
  footerUserImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  footerUserText: {
    flex: 1,
    marginLeft: fontSize,
  },
  footerUserName: {
    marginBottom: fontSize * 0.5,
    fontSize: fontSize * 1.5,
    fontWeight: 'bold',
    color: '#333333',
  },
  footerUserId: {
    marginBottom: fontSize * 0.5,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  footerUserDesc: {
    marginBottom: fontSize * 2,
    margin: 0,
    color: '#333333',
  },
  footerUserBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userFollowBtn: {
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgb(194, 194, 195)',
    backgroundColor: 'rgb(242, 242, 242)',
    color: 'rgb(110, 111, 112)',
  },
  userFollowText: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 0.6)',
  },
  snsIcon: {
    fontSize: fontSize * 1.5,
    color: 'rgba(51, 51, 51, 0.6)',
  },
});

const baseStyles = StyleSheet.create({
  base: {
    paddingBottom: fontSize * 5,
    paddingHorizontal: fontSize,
    color: '#333333',
  },
});

const tagsStyles = StyleSheet.create({
  p: {
    lineHeight: fontSize * 1.5,
  },
  h1: {
    fontSize: fontSize * 1.7,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.7 * 1.5,
    marginTop: fontSize * 1.7 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.7 * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  h2: {
    fontSize: fontSize * 1.5,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.5 * 1.5,
    marginTop: fontSize * 1.5 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.5 * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  h3: {
    fontSize: fontSize * 1.3,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.3 * 1.5,
    marginTop: fontSize * 1.3 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.3 * 0.1,
  },
  h4: {
    fontSize: fontSize * 1.2,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.2 * 1.5,
    marginTop: fontSize * 1.2 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.2 * 0.1,
  },
  h5: {
    fontSize: fontSize * 1.0,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.0 * 1.5,
    marginTop: fontSize * 1.0 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.0 * 0.1,
  },
  h6: {
    fontSize: fontSize * 1.0,
    fontWeight: 'bold',
    lineHeight: fontSize * 1.0 * 1.5,
    marginTop: fontSize * 1.0 * 2.2,
    marginBottom: fontSize * 0.5,
    paddingBottom: fontSize * 1.0 * 0.1,
  },
  ul: {
    padding: 0,
    paddingLeft: fontSize * 1.5,
    margin: 0,
    lineHeight: fontSize * 1.5,
  },
  ol: {
    padding: 0,
    paddingLeft: fontSize * 1.5,
    margin: 0,
    lineHeight: fontSize * 1.5,
  },
  li: {
    margin: 0,
    padding: 0,
  },
  blockquote: {
    borderLeftWidth: 5,
    borderLeftColor: '#dddddd',
    color: '#777777',
    padding: fontSize,
    paddingRight: 0,
    marginVertical: fontSize * 0.5,
    marginHorizontal: 0,
  },
  hr: {
    marginVertical: fontSize * 1.5,
  },
  a: {
    color: '#55C500',
    textDecorationLine: 'none',
  },
  table: {
    marginVertical: fontSize * 0.5,
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
  },
  thead: {
  },
  tr: {
  },
  th: {
    paddingVertical: fontSize * 0.5,
    paddingHorizontal: fontSize,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#cccccc',
  },
  td: {
    paddingVertical: fontSize * 0.5,
    paddingHorizontal: fontSize,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderColor: '#cccccc',
    backgroundColor: '#fafafa',
  },
  code: {
    margin: 0,
    marginBottom: -fontSize * 1.7,
    padding: 0,
    lineHeight: fontSize * 1.9,
  },
});

const classesStyles = StyleSheet.create({
  'code-frame': {
    backgroundColor: '#364549',
    marginVertical: fontSize * 0.5,
    marginHorizontal: -fontSize,
    paddingVertical: fontSize * 0.5,
    paddingHorizontal: fontSize,
    color: 'white',
  },
  'code-copy': {
    display: 'none',
    margin: 0,
    padding: 0,
  },
  highlight: {
    margin: 0,
    padding: 0,
    paddingVertical: fontSize * 0.5,
  },
  'with-code': {
    padding: 0,
    margin: 0,
  },
  'code-lang': {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: '#777777',
    transform: [{ translateY: -fontSize * 0.5 }],
  },
  bold: {
    fontWeight: 'bold',
    color: '#eeeeee',
  },
});

export default ArticleDetail;
