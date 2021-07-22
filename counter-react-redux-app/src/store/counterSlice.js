import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//we can create different slices for different functionality
// in slice we need to add :
// 1. name: it could be anything not necessary to match with state
// 2. initialState: above state
// 3. reducers: object containing methods

//While using slice we can mutate state cause redux toolkit uses package imgur which will detect code and clone state,
// create new object and keep all states we are not editing and overrides states which we are editing
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
// here we can also export as counterSlice.reducer and rather than writing counterSlice.reducer in store/index.js file we can simply write counterSlice
