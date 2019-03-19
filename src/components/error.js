import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default props => (
  <Text style={styles.error}>{props.error}</Text>
);

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
});