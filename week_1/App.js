

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#CCC"
        tintColor="yellow"
        unselectedItemTintColor="#CCC"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Home"
//          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'homeTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Home tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="featured"
          badgeColor="pink"
          selected={this.state.selectedTab === 'newMobieTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'newMobieTab',              
            });
          }}>
          {this._renderContent('#783E33', 'Featured Tab')}
        </TabBarIOS.Item>
   
      </TabBarIOS>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
