import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Counter'
import CartReducer from './Cart'
export default configureStore({
  reducer: {
    counter :CounterReducer,
    cart : CartReducer
  }
})