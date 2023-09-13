import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: 'Guest',
  about: '',
  firstName: '',
  lastName: '',
  birthday:'',
  emailAddress: '',
  country: '',
  streetAddress: '',
  city: '',
  stateProvince: '',
  zipPostal: '',
  occupation: '',
  phoneNumber: '',
  emergencyContact: ''
  // ...other user info
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      // This will merge the incoming payload into the existing state
      Object.assign(state, action.payload);
    },
    // You can still add other reducers if you need to handle specific fields
  },
});

export const { updateUser } = userReducer.actions;

export default userReducer.reducer;
