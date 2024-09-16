import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  products: [],
  token: [],
  error: null,
};

export const productSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
    setUser: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem("token", action.payload.token);
    }
  },
});

export const { setProduct, setUser } = productSlice.actions;
export default productSlice.reducer;
