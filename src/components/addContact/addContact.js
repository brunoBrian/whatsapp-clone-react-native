import React, { Component } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Loading from '../loading';
import Error from '../error';

class AddContact extends Component {
  render() {
    const { email, error, loading, getEmail, addContact } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='E-mail'
            value={email}
            style={styles.formInput} 
            onChangeText={getEmail} 
          />
          {loading &&
            <Loading />
          }
        </View>
        <View style={styles.buttonContainer}>
          {error &&
            <Error error={error}/>
          }
          <Button title='Adicionar Contato' color='#115E54' onPress={addContact} />
        </View>
      </View>
    );
  }
}

export default AddContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  formInput: {
    fontSize: 20,
    height: 45,
    borderColor: '#115E54', 
    borderBottomWidth: 1,
  },
  buttonContainer: {
    flex: 1
  },
});