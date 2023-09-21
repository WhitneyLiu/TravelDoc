import authenticationReducer from "./reducer/authenticationReducer";
import notificationReducer from "./reducer/notificationReducer";
import modalReducer from "./reducer/modalReducer";
import profileReducer from "./reducer/profileReducer";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  authentication: authenticationReducer,
  modal: modalReducer,
  notification: notificationReducer,   
  profile: profileReducer,  
 });

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['authentication']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;
