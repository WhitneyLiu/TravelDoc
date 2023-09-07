import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Guest', // initial state
  userAvatar: '', // initial state for avatar
  about:'',
  firstName:'',
  lastName:'',
  emailAddress:'',
  country:'',
  streetAddress:'',
  city:'',
  stateProvince:'',
  zipPostal:''

  // ...other user info
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserAvatar: (state, action) => { // new reducer for avatar
        state.userAvatar = action.payload;
      },
    // ...other reducers
  },
});

export const { setUserName, setUserAvatar } = userReducer.actions;

export default userReducer.reducer;