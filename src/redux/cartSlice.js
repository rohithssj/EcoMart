import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, data) => {
            let cartObj = data.payload
            state.cart = [...state.cart,cartObj]
            // console.log(state.cart)
        },
        deleteCart: (state, data) => {
            let id = data.payload
            state.cart = state.cart.filter((obj)=>obj.id!=id)
            // console.log(data.payload)
        }
    }

})

export const { addToCart, deleteCart } = cartSlice.actions


export default cartSlice.reducer