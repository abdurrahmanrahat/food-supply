import { baseApi } from "@/redux/api/baseApi";

const foodSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupply: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
    }),
    addSupply: builder.mutation({
      query: (newSupply) => ({
        url: "/supplies",
        method: "POST",
        body: newSupply,
      }),
    }),
  }),
});

export const { useAddSupplyMutation, useGetSupplyQuery } = foodSupplyApi;
