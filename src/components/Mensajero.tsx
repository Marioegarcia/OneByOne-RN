import { Chat, MessageType,defaultTheme } from '@flyerhq/react-native-chat-ui'
import React, { useState,useEffect, useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import socket from '../api/socketApi';
import { AuthContext } from '../context/auth/AuthContext';
import { Usuario } from '../interface/appInterface';



export const Mensajero = () => {
  const {usuario} = useContext(AuthContext);
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState<any>([]);

  useEffect(() => {
    socket.on("mensajes", (mensaje) => {
      setMensajes([...mensajes, mensaje]);
    });

    return () => {
      socket.off();
    };
}, [mensajes]);

  useEffect(() => {
   
  }, [])

  const [messages, setMessages] = useState<MessageType.Any[]>([])
  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c' }

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages])
  }

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: any = {
      author: usuario?.nombre,
      createdAt: Date.now(),
      id:usuario?.uid,
      text: message.text,
      type: 'text',
    }
   
    socket.emit("mensaje",textMessage);
  }

  return (
    // Remove this provider if already registered elsewhere
    // or you have React Navigation set up
    <SafeAreaProvider>
      <Chat
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        theme={{
          ...defaultTheme,
          colors: { ...defaultTheme.colors, inputBackground: '#1868cc' },
          
        }}
      />
    </SafeAreaProvider>
  )
}