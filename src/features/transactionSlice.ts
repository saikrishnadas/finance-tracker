import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// export interface CategoryState {
//         title:string,
//         color:string
// }

const initialState: any = {
    transactions:[],
    totalExpense:0,
    totalIncome:0,
    previousTotalExpense:0,
    previousTotalIncome:0,
    debitsCount:0,
    creditsCount:0
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
    getTotalExpense: (state) => {
        let total = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.type==="Expense"){
            total += transaction.transactions.amount;
          }
        });
        state.totalExpense = total;
      },
      getTotalIncome: (state) => {
        let total = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.type==="Income"){
            total += transaction.transactions.amount;
          }
        });
        state.totalIncome = total;
      },
      getPreviousTotalExpense: (state,action) => {
        let total = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.date.month === action.payload){
            if(transaction.transactions.type==="Expense"){
              total += transaction.transactions.amount;

            }

          }
        });
        state.previousTotalExpense = total;
      },
      getPreviousTotalIncome: (state,action) => {
        let total = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.date.month === action.payload){
            if(transaction.transactions.type==="Income"){
              total += transaction.transactions.amount;

            }

          }
        });
        state.previousTotalIncome = total;
      },
      getDebitsCount: (state) => {
        let count = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.type==="Expense"){
            count += 1;
          }
        });
        state.debitsCount = count;
      },
      getCreditCount: (state) => {
        let count = 0;
        state.transactions.forEach((transaction:any) => {
          if(transaction.transactions.type!=="Expense"){
            count += 1;
          }
        });
        state.creditsCount = count;
      },
  },
})

// Action creators are generated for each case reducer function
export const { addTransaction,getTotalExpense,getTotalIncome,getPreviousTotalExpense,getPreviousTotalIncome,getDebitsCount,getCreditCount } = transactionSlice.actions

export default transactionSlice.reducer