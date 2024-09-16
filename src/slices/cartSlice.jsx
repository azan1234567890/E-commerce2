import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
value: 1,
totalprice: ''
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
        state.cart.push(action.payload);
    }, 
     Increment: (state ) => {
      state.value +=1
      state.totalprice = state.cart.reduce((total, item) => total + item.price * state.value , 0);
    },
    Decrement: (state) => {
      if (state.value> 1) {
        
        state.value -=1;
              state.totalprice = state.cart.reduce((total, item) => total + item.price * state.value , 0);
      }
    }
  },
});

export const { setCart, Increment,Decrement } = cartSlice.actions;
export default cartSlice.reducer;
