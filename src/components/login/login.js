import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import bgImage from '../images/bg.png';

class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    const { email, password, getPassword, getEmail } = this.props;

    return (
      <ImageBackground style={{ flex: 1, width: null }} source={bgImage}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>WhatsApp Clone</Text>
          </View>
          <View style={styles.formContainer}>
            <TextInput style={styles.formInput} value={email} placeholderTextColor='#fff' placeholder='E-mail' onChangeText={getEmail} />
            <TextInput style={styles.formInput} secureTextEntry value={password} placeholderTextColor='#fff' placeholder='Senha' onChangeText={getPassword} />
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cadastro')}>
              <Text style={styles.formText}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Acessar" color='#115E54' onPress={() => false} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  formContainer: {
    flex: 2,
  },
  formInput: {
    fontSize: 18,
    height: 45,
    borderColor: '#115E54', 
    borderBottomWidth: 1,
    marginBottom: 10
  },
  formText: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});