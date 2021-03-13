import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : ''
        }
    }
    handleFirstName = async (text) => {
        console.log('First Name');
        await this.setState({
            firstName : text
        })
        console.log('Updated First Name', this.state.firstName)
    }
    render() {
        return(
            <View style = {{backgroundColor : 'red'}}>
                <TextInput placeholder = {'Enter First Name: '}
                onChangeText = {this.handleFirstName}
                value = {this.state.firstName}/>
            </View>
        )
    }
}