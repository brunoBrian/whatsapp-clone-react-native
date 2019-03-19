import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { StatusBar, View, TextInput, Text, Button, StyleSheet, ImageBackground, ActivityIndicator, YellowBox } from 'react-native';
import bgImage from '../../images/bg.png';
import Loading from '../loading';
import Error from '../error';

YellowBox.ignoreWarnings(['Setting a timer']);

class Register extends Component {

  registerUser = () => {
    this.props.registerUser(this.props.navigation);
    return false;
  }

  render() {
    const { name, error, email, password, getEmail, getPassword, getName, loading } = this.props;

    return (
      <ImageBackground style={{ flex: 1, width: null }} source={bgImage}>
        <StatusBar backgroundColor='#114D44' />
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput 
              placeholder='Nome' 
              value={name} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getName} 
              />
            <TextInput 
              placeholder='E-mail' 
              value={email} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getEmail} 
              />
            <TextInput 
              placeholder='Senha' 
              secureTextEntry 
              value={password} 
              placeholderTextColor='#fff' 
              style={styles.formInput} 
              onChangeText={getPassword} 
              />
          </View>
          <View style={styles.buttonContainer}>
            {error &&
              <Error error={error} />
            }
            <Button title='Cadastrar' color='#115E54' onPress={this.registerUser} />
          </View>
        </View>
        {loading &&
          <Loading />
        }
      </ImageBackground>
    );
  };
};

export default withNavigation(Register);

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
});