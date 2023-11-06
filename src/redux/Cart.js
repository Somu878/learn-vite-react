import { createSlice } from "@reduxjs/toolkit";

export const CartApp = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalCost: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalCost += existingItem.price;
            } else {
                state.cartItems.push({ ...newItem, quantity: 1 });
                state.totalCost += newItem.price;
            }
        },
        removeItem: (state, action) => {
            const idToRemove = action.payload;
            const itemToRemove = state.cartItems.find(item => item.id === idToRemove);
            if (itemToRemove) {
                state.totalCost -= itemToRemove.price * itemToRemove.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
            }
        },
    },
});

export const { addItem, removeItem } = CartApp.actions;
export default CartApp.reducer;
