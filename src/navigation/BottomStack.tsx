import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatScreen } from '../screens/ChatScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { SettingsScreen } from '../screens/SettingsScreen';


const Tab = createBottomTabNavigator();

export const BottomStack = () => {
    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                headerShown:false,
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
      </Tab.Navigator>
    )
}
