import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Keyboard } from 'react-native'
import { AuthContext } from '../context/auth/AuthContext';
import { useForm } from '../hooks/useForm';
import { LoginData } from '../interface/appInterface';

export const SignUp = () => {
    const {signIn} = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: '' 
     });


   

    const onLogin = () => {
       
        Keyboard.dismiss();
        signIn({ correo: email, password });
    }

    return (
        <View>
            <Text>SigUp</Text>
            
            <TextInput 
                style={{ 
                ...stylesScreen.inputStyle,
                borderColor: 'blue',
                color: 'black'
                }}
                placeholder="Ingrese su correo"
                autoCorrect={ false }
                autoCapitalize="words"
                onChangeText={ (value) => onChange( value, 'email' ) }
                //placeholderTextColor={ dividerColor }
            />

            <TextInput 
                style={{ 
                ...stylesScreen.inputStyle,
                borderColor: 'blue',
                color: 'black'
                }}
                placeholder="Ingrese su contraseña"
                autoCorrect={ false }
                autoCapitalize="words"
                onChangeText={ (value) => onChange( value, 'password' ) }
                //placeholderTextColor={ dividerColor }
            />

            {/* <Button
            title='Enviar'
            onPress={ handledSubmit }
            /> */}
            <TouchableOpacity
                activeOpacity={ 0.8 }
                // style={ loginStyles.button }
                onPress={ onLogin }
            >
                <Text>Login</Text>
            </TouchableOpacity>   
        </View>
    )
}

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
});
