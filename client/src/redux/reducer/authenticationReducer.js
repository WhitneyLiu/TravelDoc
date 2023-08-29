import Pool from "../../UserPool";
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
import { createSlice } from "@reduxjs/toolkit";

export const authenticationReducer = createSlice({
  name: "authentication",
  initialState: {
    //session token, user email
    // Example:
    // value: 0,
    user: {},
  },
  reducers: {
    // example:
    // increment: (state) => {
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    getSession: async (state) => {
      return await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();
        if (user) {
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
                      console.log(Name);
                      console.log(Value);
                    }
                    resolve(results);
                  }
                });
              });
              resolve({ user, ...session, ...attributes });
            }
          });
        } else {
          reject();
        }
      });
    },

    authenticate: async (state, action) => {
      // input: Username, Password, setNotification
      console.log(action.payload);
      // return await new Promise((resolve, reject) => {
      //   const user = new CognitoUser({
      //     Username,
      //     Pool,
      //   });

      //   const authDetails = new AuthenticationDetails({
      //     Username,
      //     Password,
      //   });

      //   user.authenticateUser(authDetails, {
      //     onSuccess: (data) => {
      //       resolve(data);
      //     },
      //     onFailure: (err) => {
      //       setNotification({
      //         show: true,
      //         isError: true,
      //         title: "Error!",
      //         message: err.message,
      //       });
      //       reject(err);
      //     },
      //     newPasswordRequired: (data) => {
      //       resolve(data);
      //     },
      //   });
      // });
    },

    logout: (state) => {
      const user = Pool.getCurrentUser();
      console.log(user);
      if (user) {
        user.signOut();
        console.log("logout success");
      }
    },
  },
});

// Action creators are generated for each case reducer function
// example:
export const { getSession, authenticate, logout } = authenticationReducer.actions

export default authenticationReducer.reducer;
