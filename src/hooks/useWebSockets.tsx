import {useEffect, useRef, useState} from 'react';
import {Socket} from 'socket.io-client';
import socket from '../api/socketApi';



type Message = {
  content: string;
  senderId: string;
  userId: string;
  date: Date;
};

export const useWebSockets = () => {
  const ref = useRef<Socket>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [id, setId] = useState();

  const send = (msg: string, senderId: number) => {
    ref.current!.emit('message', {
      content: msg,
      senderId: senderId,
      date: new Date(),
    });
  };

  useEffect(() => {
    socket.on('me', id => {
      setId(id);
    });

    ref.current = socket;
  }, []);
 

  
  

  return {
    // send,
    messages,
    id
  };
};