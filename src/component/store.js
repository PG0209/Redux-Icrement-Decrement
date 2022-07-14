import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../component/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
