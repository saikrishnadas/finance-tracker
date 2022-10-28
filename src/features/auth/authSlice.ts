import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from "js-cookie";


export interface AuthState {
  token: any
}

const initialState: AuthState = {
    token: Cookies.get("token") ? JSON.parse(Cookies.get("token")!) : null,
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
      state.token = action.payload

    },
  },
})

// Action creators are generated for each case reducer function
export const { authenticate } = authSlice.actions

export default authSlice.reducer