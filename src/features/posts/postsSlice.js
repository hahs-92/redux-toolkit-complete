import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const postsSlice = createSlice({
  name: "posts",
  initialState: [
    {
      id: 1,
      title: "Learning Redux toolkit",
      content: "I've heard good things",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
  ],
  reducers: {
    // postAdded(state, action) {
    //   state.push(action.payload);
    // },
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId, //nombre del user
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

//selectors
export const selectAllPosts = (state) => state.posts;

//actions creater
export const { postAdded, reactionAdded } = postsSlice.actions;

//reducer
export default postsSlice.reducer;
