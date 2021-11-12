import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from "./src/navigation/StackNav";
import { ChatScreen } from './src/screens/ChatScreen';
import { AuthProvider } from './src/context/auth/AuthContext';
import { NativeBaseProvider, Box } from 'native-base';


const AppState = ({ children } : any ) => {
  return (
    <AuthProvider>
      
        {children}
      
        
    </AuthProvider>
  )
}

const App = () => {
 

  return (
    <NavigationContainer>
       <NativeBaseProvider>
        <AppState>
         
          <StackNav/>
        </AppState>
       </NativeBaseProvider>
    
    
      
    </NavigationContainer>
  );
};


export default App;
