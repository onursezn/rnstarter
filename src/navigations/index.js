import React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const AuthStack = createStackNavigator();

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name="SignIn" component={SignIn}/>
                <AuthStack.Screen name="SignUp" component={SignUp}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavContainer;