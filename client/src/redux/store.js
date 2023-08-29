import authenticationReducer from "./reducer/authenticationReducer";
import notificationReducer from "./reducer/notificationReducer";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    notification: notificationReducer,
    user: userReducer
  },
});
