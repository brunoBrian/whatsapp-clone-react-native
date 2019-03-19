import React, { Component } from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
        <StatusBar backgroundColor='red' />
        {/* <Text>Bruno Sousa</Text> */}
      </SafeAreaView>
    );
  }
}

export default Main;