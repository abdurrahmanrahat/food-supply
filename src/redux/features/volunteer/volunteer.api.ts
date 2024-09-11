import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),

    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/volunteers/create-volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const { useGetVolunteersQuery, useAddVolunteerMutation } = volunteerApi;
