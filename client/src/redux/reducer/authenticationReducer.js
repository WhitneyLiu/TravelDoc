import Pool from "../../UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showError } from "./notificationReducer";

// check if session is valid
export const isSessionValid = (session) => {
  const { accessToken, clockDrift, refreshToken } = session;
  const now = Math.floor(Date.now() / 1000);
  const expiresAt = accessToken.payload.exp - clockDrift;
  return now < expiresAt;
};

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

export const extendSession = createAsyncThunk(
  "authentication/extendSession",
  async (_, { rejectWithValue }) => {
    try {
      const user = Pool.getCurrentUser();
      if (user) {
        return new Promise((resolve, reject) => {
          user.getSession(async (err, session) => {
            if (err) {
              reject(err);
            } else {
              user.refreshSession(session.getRefreshToken(), (err, session) => {
                if (err) {
                  reject(err);
                } else {
                  resolve({ user, ...session });
                }
              });
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
    sessionValid: false, // Session validity flag
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
        sessionValid: false, // Reset session validity flag
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
      .addCase(extendSession.pending, (state) => {
        state.isLoading = true;
      }
      )
      .addCase(extendSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.session = action.payload;
        state.sessionValid = isSessionValid(action.payload); // Set session validity
      }
      )
      .addCase(extendSession.rejected, (state) => {
        state.isLoading = false;
        state.session = {};
        state.sessionValid = false; // Reset session validity flag
      }
      )
      .addCase(getSession.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.session = action.payload;
        state.sessionValid = isSessionValid(action.payload); // Set session validity
      })
      .addCase(getSession.rejected, (state) => {
        state.isLoading = false;
        state.session = {};
        state.sessionValid = false; // Reset session validity flag
      });
  },
});

export const { logout } = authenticationReducer.actions;

export default authenticationReducer.reducer;
