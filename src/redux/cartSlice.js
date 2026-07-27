import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find(
                (obj) => obj.id === action.payload.id
            );

            if (item) {
                item.qty++;
            } else {
                state.cart.push({
                    ...action.payload,
                    qty: 1,
                });
            }
        },

        deleteCart: (state, action) => {
            state.cart = state.cart.filter(
                (obj) => obj.id !== action.payload
            );
        },

        increaseQty: (state, action) => {
            const item = state.cart.find(
                (obj) => obj.id === action.payload
            );

            if (item) {
                item.qty++;
            }
        },

        decreaseQty: (state, action) => {
            const item = state.cart.find(
                (obj) => obj.id === action.payload
            );

            if (item && item.qty > 1) {
                item.qty--;
            }
        },
    },
});

export const {
    addToCart,
    deleteCart,
    increaseQty,
    decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;