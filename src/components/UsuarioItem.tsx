import {Avatar, Box, HStack, Spacer, Text, VStack} from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Usuario} from '../interface/appInterface';

interface data {
  usuario: Usuario;
  enviarSolicitud: (id:string)=> void;
}

export const UsuarioItem = ({usuario, enviarSolicitud}: data) => {
  
   

  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2">
      <HStack space={3} justifyContent="space-between">
        {usuario.img ? (
          <Avatar
            size="48px"
            source={{
              uri: usuario.img,
            }}
          />
        ) : (
          <Icon name="account-circle" size={48} />
        )}

        <VStack>
          <Text
            _dark={{
              color: 'warmGray.50',
            }}
            color="coolGray.800"
            bold>
            {usuario.nombre}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {usuario.correo}
          </Text>
        </VStack>
        <Spacer />
        <TouchableOpacity
        onPress={ () =>  enviarSolicitud(usuario.uid) }
        style={{
            borderWidth: 1,
            borderColor:'#e4e6eb',
            borderRadius: 400,
            width: 40,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e4e6eb'
        }}
        >
            <Icon name="person-add" size={25} color='#1d1f23' />
        </TouchableOpacity>

            
      </HStack>
    </Box>
  );
};
