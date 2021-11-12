import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/auth/AuthContext';

export const CoupleScreen = () => {
    const {usuario} = useContext(AuthContext);

    return (
        <View>
            <Text>CoupleScreen</Text>
            <Text> {usuario?.amigos} </Text>
        </View>
    )
}

 
