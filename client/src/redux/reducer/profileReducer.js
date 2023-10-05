import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "./authenticationReducer";

export const updateProfileAPI = createAsyncThunk(
  "profile/updateProfileAPI",
  async (profileData, { getState, dispatch }) => {
    const { session } = getState().authentication;
    const token = session.accessToken.jwtToken;
    const filteredProfileData = Object.fromEntries(
      Object.entries(profileData).filter(([key, value]) => value !== undefined)
    );
    //console.log("In updateProfileAPI, profileData:", filteredProfileData);
    try {
      const response = await fetch(
        "https://frwfi2fosa.execute-api.us-east-1.amazonaws.com/dev/user-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(filteredProfileData),
        }
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        const transformedPayload = Object.keys(profileData).map((key) => ({
          key,
          value: profileData[key],
        }));
        transformedPayload.forEach((payload) => {
          dispatch(updateProfile(payload)); // Update the local state
        });
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "API call failed");
      }
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }
);

export const fetchProfileAPI = createAsyncThunk(
  "profile/fetchProfileAPI",
  async (_, { getState, dispatch }) => {
    const { session } = getState().authentication;
    const token = session.accessToken.jwtToken;
    try {
      const response = await fetch(
        "https://frwfi2fosa.execute-api.us-east-1.amazonaws.com/dev/user-profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const profileData = data.Items[0];
        //console.log("Fetched profile data:", profileData);
        if (Object.keys(profileData).length > 0) {
          Object.keys(profileData).forEach((key) => {
            dispatch(updateProfile({ key, value: profileData[key] }));
          });
        } else {
          dispatch(resetProfile());
        }
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "API call failed");
      }
    } catch (error) {
      console.error("API call failed:", error);
      throw error;
    }
  }
);

const initialState = {
  user_email: {
    key: "user_email",
    title: "Email Address",
    value: "",
    isEditable: false,
  },
  firstName: {
    key: "firstName",
    title: "First Name",
    value: "",
    isEditable: true,
  },
  lastName: {
    key: "lastName",
    title: "Last Name",
    value: "",
    isEditable: true,
  },
  birthday: {
    key: "birthday",
    title: "Birthday",
    value: "",
    isEditable: true,
  },
  occupation: {
    key: "occupation",
    title: "Occupation",
    value: "",
    isEditable: true,
  },
  phoneNumber: {
    key: "phoneNumber",
    title: "Phone Number",
    value: "",
    isEditable: true,
  },
  emergencyContact: {
    key: "emergencyContact",
    title: "Emergency Contact",
    value: "",
    isEditable: true,
  },
  country: {
    key: "country",
    title: "Country",
    value: "",
    isEditable: true,
  },
  streetAddress: {
    key: "streetAddress",
    title: "Street address",
    value: "",
    isEditable: true,
  },
  city: {
    key: "city",
    title: "City",
    value: "",
    isEditable: true,
  },
  province: {
    key: "province",
    title: "State / Province",
    value: "",
    isEditable: true,
  },
  zip: {
    key: "zip",
    title: "ZIP / Postal code",
    value: "",
    isEditable: true,
  },
  error: null,
};

export const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // I want an action that can update the state of the items in the profile by taking the key and value as parameters
    updateProfile: (state, action) => {
      //console.log("Received action in updateProfile:", action);
      const { key, value } = action.payload;
      //console.log(`Updating profile with key: ${key} and value: ${value}`);
      if (state[key]) {
        state[key].value = value;
      } else {
        console.error(`Key ${key} not found in state`);
      }
    },
    resetProfile: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileAPI.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(updateProfileAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchProfileAPI.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(fetchProfileAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(logout, (state) => {
        // Listen for the logout action
        Object.assign(state, initialState); // Reset the state
      });
  },
});

export const { updateProfile, resetProfile } = profileReducer.actions;

export default profileReducer.reducer;
