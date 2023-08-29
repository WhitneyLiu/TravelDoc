import { createSlice } from "@reduxjs/toolkit";

export const notificationReducer = createSlice({
  name: "notification",
  initialState: {
    show: false,
    isError: false,
    title: "",
    message: "",
  },
  reducers: {
    close: (state) => {
      return {
        ...state,
        show: false,
      };
    },
    show: (state, action) => {
      const { isError, title, message } = action.payload;

      return {
        ...state,
        show: true,
        isError,
        title: isError ? 'Error!' : title,
        message,
      };
    },
  },
});

export const { close, show } = notificationReducer.actions;

export default notificationReducer.reducer;
