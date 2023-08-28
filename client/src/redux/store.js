import authenticationReducer from "./reducer/authenticationSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { authentication: authenticationReducer },
});
