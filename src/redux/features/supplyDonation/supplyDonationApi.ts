import { baseApi } from "@/redux/api/baseApi";

const supplyDonationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplyDonation: builder.query({
      query: () => ({
        url: "/donations",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),

    addSupplyDonation: builder.mutation({
      query: (newDonation) => ({
        url: "/donations",
        method: "POST",
        body: newDonation,
      }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const { useAddSupplyDonationMutation, useGetSupplyDonationQuery } =
  supplyDonationApi;
