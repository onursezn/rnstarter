import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LOGIN, REGISTER } from '../constants/routeNames';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name = {REGISTER} component={SignUp}></AuthStack.Screen>
            <AuthStack.Screen name = "SignIn" component={SignIn}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
}

export default AuthNavigator;