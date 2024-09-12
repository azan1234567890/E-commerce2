import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice'
import calculaterReducer  from './slices/CalcularSlice'

export const store = configureStore({
  reducer: {
    products: counterReducer,
    calculater: calculaterReducer,
  },
})