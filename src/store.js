import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
// import calculaterReducer  from './slices/CalcularSlice'
import cartSlice from './slices/cartSlice'
import CounterSlice from './slices/CounterSlice'

export const store = configureStore({
  reducer: {
    products: productSlice,
    // calculater: calculaterReducer,
    cart: cartSlice,
    counter: CounterSlice
  },
})