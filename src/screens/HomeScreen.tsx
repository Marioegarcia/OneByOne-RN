import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthContext } from '../context/auth/AuthContext';

import { CoupleScreen } from './CoupleScreen';
import { Header } from '../components/Header';
import { LoadingScreen } from './LoadingScreen';

interface Props extends NativeStackScreenProps<any, any>{};

export const HomeScreen = ({ navigation }: Props) => {

    
    const {usuario} = useContext(AuthContext);
    
    

    if (usuario === null) {
        return <LoadingScreen/>
    }

    
    
    

    return (

        <View>
            
            
            <Header usuario={usuario} />

            {
                (!usuario?.couple && usuario?.nuevo) ? (
                    <Button 
                        title="Añadir"
                        onPress={ () => navigation.push('BuscarScreen')}
                    />
                )
                :
                (
                    <CoupleScreen/>
                    // <Button 
                    //     title="Ir a chat"
                    //     onPress={ () => navigation.push('ChatScreen', {
                    //         id: 1,
                    //         nombre: 'Pedro'
                    //     })  }
                    // />
                )

            }

            
        </View>
    )
}
