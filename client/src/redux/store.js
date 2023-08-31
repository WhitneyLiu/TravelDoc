import authenticationReducer from "./reducer/authenticationReducer";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducer/notificationReducer";
import userReducer from "./reducer/userReducer";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    notification: notificationReducer,
    user: userReducer
  },
});
