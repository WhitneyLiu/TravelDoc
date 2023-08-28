import { createSlice } from '@reduxjs/toolkit'

export const authenticationReducer = createSlice({
  name: 'authentication',
  initialState: {
    //session token, user email
    // Example:
    // value: 0,
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
  },
})

// Action creators are generated for each case reducer function
// example:
// export const { increment, decrement, incrementByAmount } = authenticationReducer.actions

export default authenticationReducer.reducer