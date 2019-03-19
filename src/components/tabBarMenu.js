import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TabBar} from 'react-native-tab-view';
import addContactImage from '../images/add-contact.png';

export default props => (
  
  <View style={styles.container}>
    <StatusBar backgroundColor='#114D44' />

    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WhatsApp Clone</Text>
      </View>
      <View style={styles.optionsContainer}>
        <View style={styles.logoutContainer}>
          <TouchableOpacity onPress={() => props.navigation.navigate('AddContact')}>
            <Image source={addContactImage} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.logout}>Sair</Text>
        </View>
      </View>
    </View>

    <TabBar 
      {...props} 
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={{ backgroundColor: '#115E54', elevation: 0 }}
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#115E54',
    elevation: 4,
    marginBottom: 6
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoutContainer: {
    marginLeft: 20
  },
  logout: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 18
  }
});