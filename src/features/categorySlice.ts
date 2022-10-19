import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// export interface CategoryState {
//         title:string,
//         color:string
// }

const initialState: any = {
    categories:[]
}
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state,action:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.categories =  action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory } = categorySlice.actions

export default categorySlice.reducer