import { createStackNavigator } from '@react-navigation/stack';
import React from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
i

const AuthNavigator = () => {
    conts AuthStack = createStackNavigator();
    return (
        <AuthStack.HomeNavigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name = "Sign Up" component={SignIn}></AuthStack.Screen>
            <AuthStack.Screen name = "Sign In" component={SignUp}></AuthStack.Screen>
        </AuthStack.HomeNavigator>
    );
}