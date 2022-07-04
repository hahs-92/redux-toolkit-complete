import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: 1,
      title: "Learning Redux toolkit",
      content: "I've heard good things",
    },
  ],
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

//selectors
export const selectAllPosts = (state) => state.posts;

//actions creater
export const { postAdded } = postsSlice.actions;

//reducer
export default postsSlice.reducer;
