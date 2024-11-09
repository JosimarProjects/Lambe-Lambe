import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';

// Cria uma função que retorna a store configurada
const storeConfig = () => {
    return configureStore({
        reducer: {
            user: userReducer
        }
    });
};

export default storeConfig;
