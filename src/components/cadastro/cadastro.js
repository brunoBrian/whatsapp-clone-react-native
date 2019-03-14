import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class Cadastro extends Component {

  render() {
    const { nome, email, password, getEmail, getPassword, getName } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput placeholder="Nome" value={nome} style={styles.formInput} onChangeText={getName} />
          <TextInput placeholder="E-mail" value={email} style={styles.formInput} onChangeText={getEmail} />
          <TextInput placeholder="Senha" value={password} style={styles.formInput} onChangeText={getPassword} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
      </View>
    );
  };
};

export default Cadastro;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eeefef'
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