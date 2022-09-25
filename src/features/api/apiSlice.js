import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api", //optionai
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }), //json-server --watch src/data/db.json --port 3500
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
