/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ClassComponentHello from './src/components/ClassComponentHello'
import FunctionalComponentHello from './src/components/FunctionalComponentHello'
import styles from './src/styles/App.style'
import HomeScreen from './src/components/HomeScreen'
import Form from './src/components/Form'

class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {{ fontSize : 30, color : 'white'}}>
          Hello World
        </Text>
        <ClassComponentHello/>
        <FunctionalComponentHello/>
        <HomeScreen/>
      </View>
    );
  };
};

export default App;
