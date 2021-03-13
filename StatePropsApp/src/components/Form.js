import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import GetName from './GetName';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            fullName : ''
        }
    }

    handleFirstName = async (firstName) => {
        console.log('First Name');
        await this.setState({
            firstName : firstName
        })
        console.log('Updated First Name', this.state.firstName)
    }

    handleLastName = async (lastName) => {
        console.log('Last Name');
        await this.setState({
            lastName : lastName
        })
        console.log('Updated Last Name', this.state.lastName)
    }

    getFullName = async () => {
        await this.setState({
            fullName : `Full Name : ${this.state.firstName} ${this.state.lastName}`
        })
        console.log(this.state.fullName)
    }

    render() {
        return (
            <View>
                <TextInput placeholder = {'Enter First Name'}
                onChangeText = {this.handleFirstName}
                value = {this.state.firstName}/>
                
                <TextInput placeholder = {'Enter Last Name'}
                onChangeText = {this.handleLastName}
                value = {this.state.LastName}/>

                <Button title = "Get Name" onPress = {this.getFullName}/>

                <GetName fullName = {this.state.fullName}/>

            </View>
        )
    }
}

export default Form;