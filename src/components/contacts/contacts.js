import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';

class Contacts extends Component {

  componentWillMount() {
    this.props.getListContacts();
    this.createDataSource( this.props.contactsData );
  }

  // executa quando a prop é atualizada
  componentWillReceiveProps(nextProps) {
    this.createDataSource( nextProps.contactsData );
  }

  createDataSource( contacts ) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    // Cria variável do escopo da classe
    this.dataSource = ds.cloneWithRows(contacts);
  }

  renderRow( contacts, navigation ) {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Conversations', {
          name: contacts.name
        })}
      >
        <View style={styles.container}>
          <Text style={styles.name}>{contacts.name}</Text>
          <Text style={styles.email}>{contacts.email}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={data => this.renderRow(data, this.props.navigation)}
      />
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#CCC',
    padding: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  email: {
    fontSize: 15,
  },
});