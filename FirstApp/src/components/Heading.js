import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'

export default class Heading extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        <View>
            <Text>
                {this.props.message}
            </Text>
        </View>
    }
}