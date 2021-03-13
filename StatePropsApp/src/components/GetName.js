import React, { Component } from 'react';
import { Text, View } from 'react-native'

export default class GetName extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style = {{marginTop : 10}}>
                <Text>
                    {this.props.fullName}
                </Text>
            </View>
        )
    }
}