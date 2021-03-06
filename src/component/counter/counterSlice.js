import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  state: "",
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
});

export const { increment, decrement } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;