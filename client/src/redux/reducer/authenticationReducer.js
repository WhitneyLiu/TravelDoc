import Pool from "../../UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showError } from "./notificationReducer";

export const authenticateUser = createAsyncThunk(
  "authentication/authenticateUser",
  async ({ email, password }, { dispatch }) => {
    const user = new CognitoUser({
      Username: email,
      Pool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    try {
      await new Promise((resolve, reject) => {
        user.authenticateUser(authDetails, {
          onSuccess: (data) => {
            resolve(data);
          },
          onFailure: (err) => {
            dispatch(showError(err.message));
            email = "";
            reject(err);
          },
          newPasswordRequired: (data) => {
            email = "";
            resolve(data);
          },
        });
      });
      dispatch(getSession());

      return email;
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  }
);

export const getSession = createAsyncThunk(
  "authentication/getSession",
  async (_, { rejectWithValue }) => {
    try {
      const user = Pool.getCurrentUser();
      if (user) {
        return new Promise((resolve, reject) => {
          user.getSession(async (err, session) => {
            if (err) {
              reject(err);
            } else {
              const attributes = await new Promise((resolve, reject) => {
                user.getUserAttributes((err, attributes) => {
                  if (err) {
                    reject(err);
                  } else {
                    const results = {};
                    for (let attribute of attributes) {
                      const { Name, Value } = attribute;
                      results[Name] = Value;
                    }
                    resolve(results);
                  }
                });
              });
              resolve({ user, ...session, ...attributes });
            }
          });
        });
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    email: "",
    isLoading: false,
    session: {},
  },
  reducers: {
    logout: (state) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.signOut();
        console.log("logout success");
      }
      return {
        ...state,
        email: "",
        isLoading: false,
        session: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload;
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.session = action.payload;
      })
      .addCase(getSession.rejected, (state) => {
        state.isLoading = false;
        state.session = {};
      });
  },
});

export const { logout } = authenticationReducer.actions;

//trying to delete user info in redux
// export const deleteUser = createAsyncThunk(
//   "authentication/deleteUser",
//   async (_, { dispatch, getState }) => {
//     const state = getState();
//     const isAuthenticated = state.authentication.isAuthenticated; // Get user authentication information from your state

//     if (!isAuthenticated) {
//       throw new Error("User is not authenticated"); // Throw an error or perform other actions
//     }

//     try {
//       const user = Pool.getCurrentUser();
//       if (user) {
//         // Perform the delete user operation
//         await new Promise((resolve, reject) => {
//           user.deleteUser((err, data) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(data);
//             }
//           });
//         });

//         // After deleting the user, perform the logout operation
//         dispatch(logout());

//         return "User deleted";
//       } else {
//         throw new Error("User not found");
//       }
//     } catch (error) {
//       console.error("User deletion error:", error);
//       throw error;
//     }
//   }
// );

export default authenticationReducer.reducer;
