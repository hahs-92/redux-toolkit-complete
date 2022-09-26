import { configureStore } from "@reduxjs/toolkit";
//reducers
import counterReducer from "../features/counter/counterSlice";
//import postReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

//apiSlices
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //posts: postReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: usersReducer,
  },
  //necesarios para cuando s etrabaja con rtk y redux
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
