import { baseApi } from "@/redux/api/baseApi";

const foodSupplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupply: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    addSupply: builder.mutation({
      query: (newSupply) => ({
        url: "/supplies",
        method: "POST",
        body: newSupply,
      }),
      invalidatesTags: ["supply"],
    }),
    removeSupply: builder.mutation({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
  }),
});

export const {
  useAddSupplyMutation,
  useGetSupplyQuery,
  useRemoveSupplyMutation,
} = foodSupplyApi;
