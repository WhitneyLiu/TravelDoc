import authenticationReducer from "./reducer/authenticationReducer";
import notificationReducer from "./reducer/notificationReducer";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  authentication: authenticationReducer,
  notification: notificationReducer,     
 });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;
