import React from 'react';
import {
  View, Image, Text, StyleSheet, ScrollView, RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import {
  shape, string, number, bool,
} from 'prop-types';

import Header from './Header';

const MypageHeader = ({ auth }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl tintColor="rgba(51, 51, 51, 0.1)" />}
      >
        <View style={styles.userInfo}>
          <Image source={{ uri: auth.profile_image_url }} style={styles.userImage} />
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{auth.items_count}</Text>
            <Text style={styles.analysisUnit}>記事</Text>
          </View>
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{auth.followees_count}</Text>
            <Text style={styles.analysisUnit}>フォロー</Text>
          </View>
          <View style={styles.analysisItem}>
            <Text style={styles.analysisNumber}>{auth.followers_count}</Text>
            <Text style={styles.analysisUnit}>フォロワー</Text>
          </View>
        </View>
        <View style={styles.userProfile}>
          {/* eslint-disable-next-line */}
          <Text style={styles.userId}>@{auth.id}</Text>
          <Text style={styles.userDesc}>{auth.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

MypageHeader.propTypes = {
  auth: shape({
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
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(MypageHeader);
