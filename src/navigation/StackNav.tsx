import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatScreen } from '../screens/ChatScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { SignUp } from '../screens/SignUp';
import { BottomStack } from './BottomStack';
import { AuthContext } from '../context/auth/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { BuscarScreen } from '../screens/BuscarScreen';


export type RootStackParams = {
    LoadingScreen: undefined,
    SignUp: undefined,
    BottomStack: undefined,
    BuscarScreen: undefined,
    ChatScreen: undefined,
    // ChatScreen: { id: number, nombre: string },
  }

  
const Stack = createNativeStackNavigator<RootStackParams>();


export const StackNav = () => {
    const {status,usuario} = useContext(AuthContext);
       
       
        
        return (
            <Stack.Navigator
            screenOptions={ ({route}) => ({
                       
                headerShown:false,
            
            })
            }
            >
               

                {
                    (status === 'checking' ) && <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                    
                }
                {
                    (status === 'not-authenticated' ) && <Stack.Screen name="SignUp" component={SignUp} />
                    
                }

                <Stack.Screen name="BottomStack" component={BottomStack} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} /> 

                {
                    usuario?.nuevo && ( 
                        <Stack.Screen name="BuscarScreen" component={BuscarScreen} /> 
                    
                    )
                }
                
               
            </Stack.Navigator>
            )
    

   
   
}
