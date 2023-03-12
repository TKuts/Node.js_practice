// https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import {productsReducer, authReducer} from "../reducers";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['products']
}

const rootReducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer
})

export const persistor = persistStore(store)
