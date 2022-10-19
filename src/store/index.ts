import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import categoryReducer from "../features/categorySlice"
import transactionReducer from "../features/transactionSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category:categoryReducer,
    transaction:transactionReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch