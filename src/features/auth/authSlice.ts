import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface AuthState {
  isLogged: boolean
}

const initialState: AuthState = {
    isLogged: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state,action:PayloadAction<boolean>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogged = action.payload

    },
  },
})

// Action creators are generated for each case reducer function
export const { authenticate } = authSlice.actions

export default authSlice.reducer