import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from '../tabBarMenu/tabBarMenu-container';
import Conversations from '../conversations/conversations';
import Contacts from '../contacts/contacts';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    index: 0,
    routes: [
      { key: 'conversations', title: 'Conversas' },
      { key: 'contacts', title: 'Contatos' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          conversations: Conversations,
          contacts: Contacts,
        })}
        renderTabBar={props => <TabBarMenu {...props} navigation={this.props.navigation} /> }
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

export default Main;