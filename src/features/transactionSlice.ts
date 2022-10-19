import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// export interface CategoryState {
//         title:string,
//         color:string
// }

const initialState: any = {
    transactions:[],
    total:0
}
export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    addTransaction: (state,action:PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.transactions =  action.payload;
    },
    getTotal: (state) => {
        let total = 0;
        state.transactions.forEach((transaction:any) => {
            total += transaction.transactions.amount;
        });
        state.total = total;
      },
  },
})

// Action creators are generated for each case reducer function
export const { addTransaction,getTotal } = transactionSlice.actions

export default transactionSlice.reducer