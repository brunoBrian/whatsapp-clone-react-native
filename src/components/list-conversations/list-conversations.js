import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';

class ListConversation extends Component {

  componentWillMount() {
    this.props.getContactList();
    this.createDataSource(this.props.contactListData);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.contactListData);
  }

  createDataSource( contacts ) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows( contacts );
  }

  saveParameterContactClicked = (name, email) => {
    this.props.getNameAndEmailClicked({ name, email });
    return false;
  }

  getParametersContactClicked(name, email) {
    this.saveParameterContactClicked(name, email);
    this.props.navigation.navigate('Conversations', { name: name });
  }

  renderRow( contacts ) {
    return (
      <TouchableHighlight
        onPress={() => this.getParametersContactClicked(contacts.name, contacts.email)}
      >
        <View style={styles.container}>
          <Text style={styles.text}>{contacts.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={data => this.renderRow(data)}
      />
    )
  }
}

export default ListConversation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 25
  },
});