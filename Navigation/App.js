/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MyStackScreen from './src/navigation/MyStackScreen';



const App: () => React$Node = () => {
  return (
   <MyStackScreen/>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
