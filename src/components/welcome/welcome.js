import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import bgImage from '../images/bg.png';
import logo from '../images/logo.png';


class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1, width: null }} source={bgImage}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Seja Bem-Vindo</Text>
            <Image source={logo} />
          </View>
          <View style={styles.container}>
            <Button title="Fazer Login" onPress={() => this.props.navigation.navigate('Login')} />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

export default Welcome;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  },
  button: {
    flex: 1,
  },
});