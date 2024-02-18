import { baseApi } from "@/redux/api/baseApi";

const foodSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSupply: builder.mutation({
      query: (newSupply) => ({
        url: "/supplies",
        method: "POST",
        body: newSupply,
      }),
    }),
  }),
});

export const { useAddSupplyMutation } = foodSupplyApi;
