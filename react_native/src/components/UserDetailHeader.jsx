import React from 'react';
import {
  View, SafeAreaView, TouchableWithoutFeedback, Image, Text, StyleSheet, ScrollView, RefreshControl,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, number, bool,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import FollowButton from './FollowButton';
import SNSButton from './SNSButton';

const UserDetailHeader = ({ user }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <View style={styles.textArea}>
            <TouchableWithoutFeedback
              onPress={() => { navigation.goBack(); }}
              style={styles.backBtn}
            >
              <Ionicons name="chevron-back" size={30} color="white" style={styles.backIcon} />
            </TouchableWithoutFeedback>
            {/* eslint-disable-next-line */}
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>@{user.id}</Text>
            <TouchableWithoutFeedback>
              <Ionicons name="chevron-back" size={30} color="black" style={{ ...styles.backIcon, ...styles.backIconOpacity }} />
            </TouchableWithoutFeedback>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl tintColor="rgba(51, 51, 51, 0.1)" />}
      >
        <View style={styles.userInfo}>
          <Image source={{ uri: user.profile_image_url }} style={styles.userImage} />
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{user.items_count}</Text>
            <Text style={styles.analysisUnit}>記事</Text>
          </View>
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{user.followees_count}</Text>
            <Text style={styles.analysisUnit}>フォロー</Text>
          </View>
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{user.followers_count}</Text>
            <Text style={styles.analysisUnit}>フォロワー</Text>
          </View>
        </View>
        <View style={styles.userProfile}>
          {/* eslint-disable-next-line */}
          <Text style={styles.userId}>@{user.id}</Text>
          <Text style={styles.userDesc}>{user.description}</Text>
        </View>
        <View style={styles.userButtons}>
          <FollowButton />
          <SNSButton name="link" link={user.website_url} />
          <SNSButton name="github" link={user.github_login_name} />
          <SNSButton name="twitter" link={user.twitter_screen_name} />
          <SNSButton name="facebook" link={user.facebook_id} />
          <SNSButton name="feed" />
        </View>
      </ScrollView>
    </View>
  );
};

UserDetailHeader.propTypes = {
  user: shape({
    description: string,
    facebook_id: string,
    followees_count: number,
    followers_count: number,
    github_login_name: string,
    id: string,
    items_count: number,
    linkedin_id: string,
    location: string,
    name: string,
    organization: string,
    permanent_id: number,
    profile_image_url: string,
    team_only: bool,
    twitter_screen_name: string,
    website_url: string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  header: {
    backgroundColor: '#55C500',
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginVertical: 10,
  },
  backIcon: {
    marginLeft: 14,
    opacity: 0.5,
  },
  backIconOpacity: {
    opacity: 0,
  },
  title: {
    flex: 1,
    marginHorizontal: 14,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  userInfo: {
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  analysisItem: {
    justifyContent: 'center',
  },
  analysisNumber: {
    marginBottom: 3.5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  analysisUnit: {
    textAlign: 'center',
    color: 'rgba(51, 51, 51, 0.6)',
  },
  userProfile: {
    paddingHorizontal: 14,
  },
  userId: {
    fontWeight: 'bold',
    marginBottom: 7,
  },
  userDesc: {
    color: 'rgba(51, 51, 51, 0.6)',
  },
  userButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    paddingRight: 28,
    paddingBottom: 0,
  },
});

export default UserDetailHeader;
