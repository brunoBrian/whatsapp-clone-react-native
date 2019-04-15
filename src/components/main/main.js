import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import TabBarMenu from '../tabBarMenu/tabBarMenu-container';
import ListConversations from '../list-conversations/list-conversations-container';
import Contacts from '../contacts/contacts-container';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    index: 0,
    routes: [
      { key: 'listConversations', title: 'Conversas' },
      { key: 'contacts', title: 'Contatos' },
    ],
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'contacts':
        return <Contacts navigation={this.props.navigation} />;
      case 'listConversations':
        return <ListConversations navigation={this.props.navigation} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={props => <TabBarMenu {...props} navigation={this.props.navigation} /> }
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

export default Main;