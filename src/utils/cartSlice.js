import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:'cart',
        initialState: {
            items:[]
        },
        reducers: {
            addItem: (state,action) => {
                //Vanilla(older) Redux => Don't Mutate State, returning was mandatory
                //const newState = [...state];
                //newState.items.push(action.payload);
                //return newState;

                //Redux Toolkit
                //mutating the state here
                state.items.push(action.payload);
            },
            removeItem: (state,action) => {
                state.items.pop();
            },
            clearCart: (state) => {
                //RTK - either Mutate the existing state or return a new state
                // state.items.length = 0; //originalState = []

                return {items:[]}; //this new object will be replaced inside originalState = []
            }
        }
    }
)
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer; 