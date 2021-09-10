import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const FollowButton = () => {
  return (
    <TouchableOpacity style={styles.userFollowBtn}>
      <Text style={styles.userFollowText}>フォロー</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default FollowButton;
