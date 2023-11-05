import { createSlice } from "@reduxjs/toolkit";

export const CartApp = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalCost: 0 ,
    },
    reducers: {
        addItem: (state, action) => {
            state.cartItems.push(action.payload);
            state.totalCost+=action.payload.price
        },
        removeItem: (state, action) => {
            const index = action.payload;
            if (index >= 0 && index < state.cartItems.length) {
                state.cartItems.splice(index, 1);
            }
        },
    },
});

export const { addItem, removeItem } = CartApp.actions;
export default CartApp.reducer;
