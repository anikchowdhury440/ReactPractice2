import React from 'react';
import { Button, Text, View } from 'react-native'

function DetailScreen({ navigation }) {
    return (
        <View style = {{ alignItems : "center", justifyContent : "center"}}>
            <Text>Details Screen</Text>
            <Button title = "Go To Details"
                onPress = {() => navigation.navigate('Home')}/>
        </View>
    )
}

export default DetailScreen;