import React ,{useState,useEffect, useContext} from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput'
import { UsuarioItem } from '../components/UsuarioItem';
import { AuthContext } from '../context/auth/AuthContext';
import { useUsuarioSearch } from '../hooks/useUsuarioSearch';










export const BuscarScreen = () => {
   
    const [ term, setTerm ] = useState<string>('')
    const {buscarUsuario,usuariosList,peticionEnvida,solicitudPendiente} = useUsuarioSearch();

    const {usuario,checkToken} = useContext(AuthContext);
    

    const buscar = () => {
        buscarUsuario(term,usuario!.uid);
    }

    const enviarSolicitud = (id:string) => {
      
        peticionEnvida(usuario!.uid, id);
        checkToken();
    }

    useEffect(() => {
        solicitudPendiente(usuario!.uid);
    }, [])

    

    
   
    
    return (
        <View>
            <Text>Buscar</Text>
            <SearchInput
            onDebounce={ (value) => setTerm( value )  }
            buscar={buscar}
             style={{
                marginVertical:15,
                marginHorizontal:10
                
            }}
            />
       

            <FlatList
                data={ usuariosList }
                keyExtractor={ (usuario) => usuario.uid }
                showsVerticalScrollIndicator={ false }
                renderItem={ ( {item}  ) => ( <UsuarioItem usuario={item} enviarSolicitud={enviarSolicitud} /> )  }
            />
           
          
        </View>
    )
}


