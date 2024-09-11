import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),

    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/testimonials/create-testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const { useGetTestimonialsQuery, useAddTestimonialMutation } =
  testimonialApi;
