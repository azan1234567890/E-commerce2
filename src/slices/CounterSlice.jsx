import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  products: [],
  api: [{}],
  error: null,
};

export const counterSlice = createSlice({
  name: "testing",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.data = action.payload;
    },
    setUser: (state, action) => {
      state.api = action.payload;
      sessionStorage.setItem("token", action.payload.token);
    },
  },
});

export const { setProduct, setUser } = counterSlice.actions;
export default counterSlice.reducer;
