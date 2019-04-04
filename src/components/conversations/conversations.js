import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';
import sendMessageIcon from '../../images/send-message-icon.png';

class Conversations extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          <Text>Mensagem</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
          <TouchableHighlight
            onPress={() => alert(9999)}
            underlayColor='#eee4dc'
          >
            <Image source={sendMessageIcon} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Conversations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee4dc',
    padding: 10
  },
  messagesContainer: {
    flex: 1,
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    height: 60
  },
  input: {
    flex: 4,
    backgroundColor: '#fff',
    fontSize: 18,
    marginRight: 5
  },
  image: {
    height: 60,
    width: 60
  }
});