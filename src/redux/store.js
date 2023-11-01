import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Counter'
export default configureStore({
  reducer: {
    counter :CounterReducer
  }
})