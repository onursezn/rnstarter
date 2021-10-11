import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HOME, PROFILE, HOME_TAB } from '../constants/routeNames';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import HomeTab from "./HomeTab";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {

    return (
        <HomeStack.Navigator>
           <HomeStack.Screen name = {HOME_TAB} component={HomeTab}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
}

export default HomeNavigator;
