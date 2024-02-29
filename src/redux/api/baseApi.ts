import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-supply-server.vercel.app/api/v1",
  }),
  tagTypes: ["supply", "donation", "volunteer"],
  endpoints: () => ({}),
});
