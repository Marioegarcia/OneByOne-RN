import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ChatScreen } from '../screens/ChatScreen';

const Tab = createMaterialTopTabNavigator();


export const TopTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            
        </Tab.Navigator>
    )
}

