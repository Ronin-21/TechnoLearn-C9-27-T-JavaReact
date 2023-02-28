import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      // "https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api",
      "https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api",
  }),
  endpoints: (builder) => ({
    getCursos: builder.query({
      query: () => "/cursos/list",
    }),
    getCursoByID: builder.query({
      query: (id) => `/cursos/${id}`,
    }),
    getUsers: builder.query({
      query: () => "/todos",
    }),
    getUserByID: builder.query({
      query: (id) => `/buscar/${id}`,
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
        body: username,
      }),
    }),
    putCursosUser: builder.mutation({
      query: (ids) => ({
        url: "/agregarCurso",
        method: "PUT",
        body:  ids ,
      }),
    }),
    sendNewsletter: builder.mutation({
      query: (body) => ({
        url: "/newsletter",
        method: "POST",
        body,
      }),
    }),
    buySuscription: builder.mutation({
      query: ({id, data}) => ({
      url:`/comprarSuscripcion/${id}`,
      method: "POST",
      body: data,
      }),
     }),
  }),
});

export const {
  useGetCursosQuery,
  useGetCursoByIDQuery,
  useGetUsersQuery,
  useGetUserByIDQuery,
  useCreateUserMutation,
  useLoginMutation,
  usePutCursosUserMutation,
  useSendNewsletterMutation,
  useBuySuscriptionMutation
} = apiSlice;
