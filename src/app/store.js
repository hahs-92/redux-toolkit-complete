import { configureStore } from "@reduxjs/toolkit";
//reducers
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
