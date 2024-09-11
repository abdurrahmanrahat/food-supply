import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGratitudes: builder.query({
      query: () => ({
        url: "/gratitudes",
        method: "GET",
      }),
      providesTags: ["gratitude"],
    }),

    addGratitude: builder.mutation({
      query: (data) => ({
        url: "/gratitudes/create-gratitude",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["gratitude"],
    }),
  }),
});

export const { useGetGratitudesQuery, useAddGratitudeMutation } =
  testimonialApi;
