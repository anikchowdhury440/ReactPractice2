import React from 'react';
import { Button, Text, View } from 'react-native'

function HomeScreen({ navigation }) {
    return (
        <View style = {{ alignItems : "center", justifyContent : "center"}}>
            <Text>Home Screen</Text>
            <Button title = "Go To Details"
                onPress = {() => navigation.navigate('Details')}/>
        </View>
    )
}

export default HomeScreen;