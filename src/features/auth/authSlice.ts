import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from "js-cookie";


export interface AuthState {
  user: any
}

const initialState: AuthState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state,action:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload
    },
    logout:(state) => {
      state.user = null; 
      localStorage.removeItem("user");
    }
  },
})

// Action creators are generated for each case reducer function
export const { authenticate,logout } = authSlice.actions

export default authSlice.reducer