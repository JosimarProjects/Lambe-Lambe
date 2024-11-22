import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import postsReducer from './reducers/posts';

// Cria uma função que retorna a store configurada
const storeConfig = () => {
    return configureStore({
        reducer: {
            user: userReducer, // Reducer para gerenciar dados do usuário
            posts: postsReducer // Reducer para gerenciar posts
        }
    });
};

export default storeConfig;
