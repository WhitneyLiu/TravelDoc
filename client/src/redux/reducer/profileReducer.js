import { createSlice } from "@reduxjs/toolkit";

export const profileReducer = createSlice({
  name: "profile",
  initialState: {
    email: {
        key: "email",
        title: "Email Address",
        value: "",
        isEditable: false
    },
    firstName: {
        key: "firstName",
        title: "First Name",
        value: "",
        isEditable: true
    },
    lastName: {
        key: "lastName",
        title: "Last Name",
        value: "",
        isEditable: true
    },
    birthday: {
        key: "birthday",
        title: "Birthday",
        value: "",
        isEditable: true
    },
    occupation: {
        key: "occupation",
        title: "Occupation",
        value: "",
        isEditable: true
    },
    phoneNumber: {
        key: "phoneNumber",
        title: "Phone Number",
        value: "",
        isEditable: true
    },
    emergencyContact: {
        key: "emergencyContact",
        title: "Emergency Contact",
        value: "",
        isEditable: true
    },
    country: {
        key: "country",
        title: "Country",
        value: "",
        isEditable: true
    },
    streetAddress: {
        key: "streetAddress",
        title: "Street address",
        value: "",
        isEditable: true
    },
    city: {
        key: "city",
        title: "City",
        value: "",
        isEditable: true
    },
    state: {
        key: "state",
        title: "State / Province",
        value: "",
        isEditable: true
    },
    zip: {
        key: "zip",
        title: "ZIP / Postal code",
        value: "",
        isEditable: true
    },
  },
  reducers: {
    // I want an action that can update the state of the items in the profile by taking the key and value as parameters
    updateProfile: (state, action) => {
        const { key, value } = action.payload;
        // console.log(key, value);
        state[key].value = value;
    }
  },
});

export const { updateProfile } = profileReducer.actions;

export default profileReducer.reducer;
