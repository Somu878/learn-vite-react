import { createSlice } from '@reduxjs/toolkit'
export const CounterApp = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
        state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
          reset: state=>{
        state.value = 0
      }
    }
  }
)
export const { increment, decrement,reset, incrementByAmount } = CounterApp.actions

export default CounterApp.reducer