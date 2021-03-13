import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../components/HomeScreen';
import DetailScreen from '../components/DetailScreen';

const Stack = createStackNavigator();

function MyStackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = "Home"
                screenOptions = {{headerShown : false}}>
                <Stack.Screen name = "Home" component = {HomeScreen}/>
                <Stack.Screen name = "Details" component = {DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackScreen;