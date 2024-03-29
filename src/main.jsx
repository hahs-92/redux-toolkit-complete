import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./routes/App";
//store
import { store } from "./app/store";
//import { fetchPosts } from "./features/posts/postsSlice";
import { fetchUsers } from "./features/users/usersSlice";
//rtk api
import { extendedApiSlice } from "./features/posts/postsSlice";

import "./index.css";

store.dispatch(fetchUsers());
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
//store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
