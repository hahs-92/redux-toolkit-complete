import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Alex Hernandez" },
  { id: "1", name: "Jess Jhonson" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

//selectors
export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
