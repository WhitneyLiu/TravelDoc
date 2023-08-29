import authenticationReducer from "./reducer/authenticationReducer";
import notificationReducer from "./reducer/notificationReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    authentication: authenticationReducer,
    notification: notificationReducer,
  },
});
