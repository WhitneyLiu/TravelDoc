import { createSlice } from "@reduxjs/toolkit";

export const modalReducer = createSlice({
  name: "modal",
  initialState: {
    confiemButton: "",
    open: false,
    title: "",
    message: "",
    action: () => {},
  },
  reducers: {
    close: (state) => {
      return {
        ...state,
        open: false,
      };
    },
		open: (state, action) => {
			const { confiemButton, title, message, action: actionFunction } =
				action.payload;

			return {
				...state,
				confiemButton,
				open: true,
				title,
				message,
				action: actionFunction,
			};
		},
  },
});

export const { close, open } = modalReducer.actions;

export default modalReducer.reducer;
