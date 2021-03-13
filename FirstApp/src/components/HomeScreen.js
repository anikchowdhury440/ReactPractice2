import React, { Component } from 'react';
import {View} from 'react-native'
import Heading from './Heading';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Heading message = {'This is the heading for Home Screen'}/>
            </View>
        )
    }
}