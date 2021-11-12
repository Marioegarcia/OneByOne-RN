import {  useState } from 'react';
import { ResultSearch, Usuario, UsuarioSearch } from '../interface/appInterface';
import authApi from '../api/authApi';




export const useUsuarioSearch = () => {
    
    const [ isFetching, setIsFetching ] = useState(true);
    const [ usuariosList, setUsuariosList ] = useState<ResultSearch[]>([]);

    const [pendiente, setPendiente] = useState();
   
    const buscarUsuario = async(termino:string,id:string) => {
        const resp = await authApi.get<UsuarioSearch>(`/buscar/usuarios/${termino}/${id}`);
   
        setUsuariosList(resp.data.results);
  
    }

    const peticionEnvida = async(userEnvia:string, userRecive:string) => {

        const resp = await authApi.post<any>(`/amigos`, {
            userEnvia: userEnvia ,
            userRecibe:userRecive
        } );

        console.log(resp.data);
        
        
    }

    const solicitudPendiente = async(id:string) => {

        const resp = await authApi.get<any>(`/amigos/${id}` );
        setPendiente(resp.data)
       
        
    }

    const eliminarAmigo = async(id:string,userRecibe:string) => {
        const resp = await authApi.post<any>(`/delete/${id}`,{userRecibe} );
        console.log(resp.data);
        
    }




    return {
        isFetching,
        usuariosList,
        buscarUsuario,
        peticionEnvida,
        solicitudPendiente,
        pendiente,
        eliminarAmigo
    }

}