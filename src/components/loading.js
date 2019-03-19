import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export default props => (
  <ActivityIndicator style={styles.loading} size={120} color='#56be57' />
);

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    justifyContent: 'center',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0,
  }
});