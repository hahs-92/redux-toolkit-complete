import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./routes/App";
//store
import { store } from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";

import "./index.css";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
