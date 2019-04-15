import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TextInput, Image, TouchableHighlight } from 'react-native';
import sendMessageIcon from '../../images/send-message-icon.png';

class Conversations extends Component {

  componentWillMount() {
    this.props.listMessages();
    this.createDataSource( this.props.messagesData );
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.messagesData);
  }

  createDataSource( conversation ) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows( conversation );
  }

  renderRow( messages ) {
    return (
      messages.type === 'send' ?
        <View style={styles.sendedMessage}>
          <Text style={styles.sendedMessageText}>{messages.message}</Text>
        </View>
      :
        <View style={styles.receivedMessage}>
          <Text style={styles.receivedMessageText}>{messages.message}</Text>
        </View>
    );
  }

  render() {
    const { inputMessage, getInputMessage, sendInputMessage } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.messagesContainer}>
          <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={data => this.renderRow(data)}
        />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            value={inputMessage}
            style={styles.input} 
            onChangeText={getInputMessage} 
          />
          <TouchableHighlight
            onPress={sendInputMessage}
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
  },
  sendedMessage: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 40
  },
  sendedMessageText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    backgroundColor: '#dbf5b4',
    elevation: 1
  },
  receivedMessage: {
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 40
  },
  receivedMessageText: {
    fontSize: 18,
    color: '#000',
    padding: 10,
    backgroundColor: '#f7f7f7',
    elevation: 1
  },
});