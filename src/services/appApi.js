import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create the api

export const appApi = createApi({
  reducerPath: "appApi", // sets where api data will be set
  baseQuery: fetchBaseQuery({ baseUrl: "https://gondwana-backend-demo.onrender.com" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      // define signup endpoint
      query: (user) => ({
        url: "/users/signup",
        method: "POST",
        body: user,
      }),
    }),

    login: builder.mutation({
      // define the 'login' endpoint mutation
      query: (user) => ({
        // define the request options for the endpoint.
        url: "/users/login", // set the URL path for the request
        method: "POST", // set the method
        body: user, // set the request body to the 'user' object passed as an argument
      }),
    }),

    // creating product mutation
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        body: product,
        method: "POST",
      }),
    }),

    deleteProduct: builder.mutation({
      query: ({ product_id, user_id }) => ({
        url: `/products/${product_id}`,
        body: {
          user_id,
        },
        method: "DELETE",
      }),
    }),

    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        body: product,
        method: "PATCH",
      }),
    }),

    // add to cart
    addToCart: builder.mutation({
      query: (cartInfo) => ({
        url: "/products/add-to-cart",
        body: cartInfo,
        method: "POST",
      }),
    }),
    // remove from cart
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: "/products/remove-from-cart",
        body,
        method: "POST",
      }),
    }),

    // increase cart
    increaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/increase-cart",
        body,
        method: "POST",
      }),
    }),

    // decrease cart
    decreaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/decrease-cart",
        body,
        method: "POST",
      }),
    }),
    // create order
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductMutation,
  useCreateOrderMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = appApi;

export default appApi;
