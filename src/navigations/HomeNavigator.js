import { createStackNavigator } from '@react-navigation/stack';
import React from 'react-native';
import Profile from '../screens/Profile';

const HomeNavigator = () => {
    conts HomeStack = createStackNavigator();
    return (
        <HomeStack.HomeNavigator>
            <HomeStack.Screen name = "Profile" component={Profile}></HomeStack.Screen>
        </HomeStack.HomeNavigator>
    );
}