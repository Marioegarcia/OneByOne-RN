import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react';
import socket from '../api/socketApi';
import { Mensajero } from '../components/Mensajero';
import { AuthContext } from '../context/auth/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any>{};


export const ChatScreen = ({route,navigation}:Props) => {
    console.log(route);
    
        
    return (
        <View style={{flex:1,padding:5}} >
            
            <Mensajero  />
        </View>
    )
}
