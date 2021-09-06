import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import user from '../../assets/data/User.json';
import ArticlesResultScreen from './ArticlesResultScreen';

const MypageTab = createMaterialTopTabNavigator();

const MypageScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={{ uri: user.profile_image_url }} style={styles.userImage} />
        <View style={styles.userAnalysis}>
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
      </View>
      <View style={styles.userProfile}>
        {/* eslint-disable-next-line */}
        <Text style={styles.userId}>@{user.id}</Text>
        <Text style={styles.userDesc}>{user.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
  },
  userImage: {
    width: 80,
    height: 80,
    marginRight: 14,
    borderRadius: 40,
  },
  userAnalysis: {
    flexDirection: 'row',
  },
  analysisItem: {
    width: 100,
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

export default MypageScreen;
