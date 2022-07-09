import {
  createSlice,
  createAsyncThunk,
  bindActionCreators,
} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const initialState = [
  // { id: "0", name: "Alex Hernandez" },
  // { id: "1", name: "Jess Jhonson" },
];

//thumk
// Este thunk se dispara desde el index de la aplicacion
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//selectors
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
