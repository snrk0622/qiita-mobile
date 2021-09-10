import React from 'react';
import {
  View, SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape, string, number, bool, arrayOf,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

const ArticleDetailHeader = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.textArea}>
          <TouchableWithoutFeedback
            onPress={() => { navigation.goBack(); }}
            style={styles.backBtn}
          >
            <Ionicons name="chevron-back" size={30} color="white" style={styles.backIcon} />
          </TouchableWithoutFeedback>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
          <TouchableWithoutFeedback>
            <Ionicons name="chevron-back" size={30} color="black" style={{ ...styles.backIcon, ...styles.backIconOpacity }} />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </View>
  );
};

ArticleDetailHeader.propTypes = {
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

const styles = StyleSheet.create({
  container: {
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
});

export default ArticleDetailHeader;
