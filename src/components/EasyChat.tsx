import React from 'react'
import { View, Text } from 'react-native'
import { ChatScreen } from 'react-native-easy-chat-ui'

const messages = [
    {
      id: `1`,
      type: 'text',
      content: 'hello world',
      targetId: '12345678',
      chatInfo: {
       // avatar: require('../../source/defaultAvatar.png'),
        id: '12345678',
        nickName: 'Test'
      },
      renderTime: true,
      sendStatus: 0,
      time: '1542006036549'
    },
    {
      id: `2`,
      type: 'text',
      content: 'hi/{se}',
      targetId: '12345678',
      chatInfo: {
      //  avatar: require('../../source/defaultAvatar.png'),
        id: '12345678',
        nickName: 'Test'
      },
      renderTime: true,
      sendStatus: 0,
      time: '1542106036549'
    },
    {
      id: `3`,
      type: 'image',
      content: {
        uri: 'https://upload-images.jianshu.io/upload_images/11942126-044bd33212dcbfb8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
        width: 100,
        height: 80,
      } ,
      targetId: '12345678',
      chatInfo: {
       // avatar: require('../../source/defaultAvatar.png'),
        id: '12345678',
        nickName: 'Test'
      },
      renderTime: false,
      sendStatus: 0,
      time: '1542106037000'
    },
    {
      id: `4`,
      type: 'text',
      content: '你好/{weixiao}',
      targetId: '88886666',
      chatInfo: {
       // avatar: require('../../source/avatar.png'),
        id: '12345678'
      },
      renderTime: true,
      sendStatus: -2,
      time: '1542177036549'
    },
    {
      id: `5`,
      type: 'voice',
      content: {
        uri: 'http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3',
        length: 10
      },
      targetId: '12345678',
      chatInfo: {
        //avatar: require('../../source/defaultAvatar.png'),
        id: '12345678',
        nickName: 'Test'
      },
      renderTime: true,
      sendStatus: 1,
      time: '1542260667161'
    },
    {
      id: `6`,
      type: 'voice',
      content: {
        uri: 'http://m10.music.126.net/20190810141311/78bf2f6e1080052bc0259afa91cf030d/ymusic/d60e/d53a/a031/1578f4093912b3c1f41a0bfd6c10115d.mp3',
        length: 30
      },
      targetId: '88886666',
      chatInfo: {
       // avatar: require('../../source/avatar.png'),
        id: '12345678'
      },
      renderTime: true,
      sendStatus: 0,
      time: '1542264667161'
    },
  ]
  // chatBg: require('../../source/bg.jpg'),
//   inverted: false,  // require
//   voiceHandle: true,
//   currentTime: 0,
//   recording: false,
//   paused: false,
//   stoppedRecording: false,
//   finished: false,
//   audioPath: '',
//   voicePlaying: false,
//   voiceLoading: false
// }
export const EasyChat = () => {
    return (
        <View>
            
        </View>
    )
}

