import { configureStore } from '@reduxjs/toolkit'
import blogSlice from './slices/blogSlice';

const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  }
})

export default store;