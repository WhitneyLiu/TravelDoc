import authenticationReducer from "./reducer/authenticationReducer";
import notificationReducer from "./reducer/notificationReducer";
import modalReducer from "./reducer/modalReducer";
import profileReducer from "./reducer/profileReducer";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

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

// // clear Persisted State after logout
// store.subscribe(() => {
//   if (!store.getState().authentication.isAuthenticated) {
//     persistor.purge();
//   }
// });


export default store;
