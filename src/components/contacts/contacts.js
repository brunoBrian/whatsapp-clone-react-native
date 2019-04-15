import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';

class Contacts extends Component {

  componentWillMount() {
    this.props.getcontactsList();
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

  // Função auxiliar para passar nome e email para a action
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
        underlayColor='#fff'
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
        renderRow={data => this.renderRow(data)}
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