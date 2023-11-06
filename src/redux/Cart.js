import { createSlice } from "@reduxjs/toolkit";

export const CartApp = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalCost: 0 ,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalCost += existingItem.price;
            } else {
                state.cartItems.push(newItem);
                state.totalCost += newItem.price;
            }
        },
        removeItem: (state, action) => {
            const indexToRemove = action.payload;

            state.cartItems.splice(indexToRemove, 1);
            

            }

        },
    },
);

export const { addItem, removeItem } = CartApp.actions;
export default CartApp.reducer;
