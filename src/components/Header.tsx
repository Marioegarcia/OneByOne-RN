import React from 'react'
import { View, Text } from 'react-native'
import { Usuario } from '../interface/appInterface';


interface Props {
    usuario?: Usuario;
}

export const Header = ({usuario}: Props) => {


    return (
        <View>
            <Text>Header</Text>
        </View>
    )
}


