import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HOME, PROFILE } from '../constants/routeNames';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name = {HOME} component={Home}></HomeStack.Screen>
            <HomeStack.Screen name = {PROFILE} component={Profile}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;