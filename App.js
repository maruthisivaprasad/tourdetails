/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,TouchableHighlight, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import ManageDetails from './components/ManageDetails';
import ShowDetails from './components/ShowDetails';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ManageDetails />
      <TouchableHighlight onPress={() => this._pressRow()}>
          <View>
            <Text>Welcome to My React Native! vcli</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.welcome} >Welcome to My React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
  _pressRow =() => {
    alert("clicked")
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
