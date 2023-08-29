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
    showError: (state, action) => {
      return {
        ...state,
        show: true,
        isError: true,
        title: 'Error!',
        message: action.payload,
      };
    },
    showSuccess: (state, action) => {
      const { title, message } = action.payload;

      return {
        ...state,
        show: true,
        isError: false,
        title: title,
        message,
      };
    },
  },
});

export const { close, showError, showSuccess } = notificationReducer.actions;

export default notificationReducer.reducer;
