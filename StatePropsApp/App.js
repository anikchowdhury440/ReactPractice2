
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
import Form from './src/components/Form';

class App extends Component {
  render() {
    return (
      <View>
        <Form/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  
});

export default App;
