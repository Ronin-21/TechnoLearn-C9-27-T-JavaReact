import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api",
  }),
  endpoints: (builder) => ({
    getCursos: builder.query({
      query: () => "/cursos/list",
    }),
    getUsers: builder.query({
      query: () => "/todos",
    }),
    getCursoByID: builder.query({
      query: (id) => `${id}`,
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/registro",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (username) => ({
        url: "/login",
        method: "POST",
        body:  username ,
      }),
    }),
  }),
});


export const {
  useGetCursosQuery,
  useGetUsersQuery,
  useGetCursoByIDQuery,
  useCreateUserMutation,
  useLoginMutation,
} = apiSlice;
