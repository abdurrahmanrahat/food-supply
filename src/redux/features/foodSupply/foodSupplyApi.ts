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
    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
      // providesTags: ["supply"],
    }),
    addSupply: builder.mutation({
      query: (newSupply) => ({
        url: "/supplies/create-supply",
        method: "POST",
        body: newSupply,
      }),
      invalidatesTags: ["supply"],
    }),
    updateSupply: builder.mutation({
      query: (payload) => {
        return {
          url: `/supplies/${payload.id}`,
          method: "PATCH",
          body: payload.newData,
        };
      },
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
  useGetSingleSupplyQuery,
  useUpdateSupplyMutation,
  useRemoveSupplyMutation,
} = foodSupplyApi;
