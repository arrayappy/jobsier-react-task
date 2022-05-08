import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

const blogSlice = createSlice({  
  name: 'blog',
  initialState,
  reducers: {
    setBlogs (state, action) {
      state.blogs = action.payload;
    }
  },
})

export default blogSlice;

export const { setBlogs } = blogSlice.actions;
