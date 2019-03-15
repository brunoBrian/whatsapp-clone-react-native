import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import bgImage from '../images/bg.png';

class Register extends Component {

  render() {
    const { name, error, success, email, password, getEmail, getPassword, getName, registerUser } = this.props;

    return (
      <ImageBackground style={{ flex: 1, width: null }} source={bgImage}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput 
              placeholder="Nome" 
              value={name} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getName} 
            />
            <TextInput 
              placeholder="E-mail" 
              value={email} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getEmail} 
            />
            <TextInput 
              placeholder="Senha" 
              secureTextEntry 
              value={password} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getPassword} 
            />
          </View>
          <View style={styles.buttonContainer}>
            {error !== '' &&
              <Text style={styles.error}>{error}</Text>
            }
            <Button title="Cadastrar" color="#115E54" onPress={registerUser} />
          </View>
        </View>
      </ImageBackground>
    );
  };
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  formContainer: {
    flex: 4, 
    justifyContent: 'center'
  },
  formInput: {
    fontSize: 18,
    height: 45,
    borderColor: '#115E54', 
    borderBottomWidth: 1,
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  }
});