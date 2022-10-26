import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import categoryReducer from "../features/categorySlice"
import transactionReducer from "../features/transactionSlice"
import tabReducer from "../features/tabsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    category:categoryReducer,
    transaction:transactionReducer,
    tab:tabReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch