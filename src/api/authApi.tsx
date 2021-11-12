import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const baseURL = 'http://192.168.1.12:8000/api';  

const authApi = axios.create({baseURL});

authApi.interceptors.request.use(
    async(config:any)=>{
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    }
)

export default authApi;