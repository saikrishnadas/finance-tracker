import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    selected:0
}
export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeSelected: (state,action:PayloadAction<any>) => {
      state.selected =  action.payload;
    },
  },
})

export const { changeSelected } = tabsSlice.actions

export default tabsSlice.reducer