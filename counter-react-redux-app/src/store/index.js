import { configureStore, createSlice } from "@reduxjs/toolkit";

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

// Authentication
const initialAuthState = {
  isAuthenticated: false,
};
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// =>ConfigureStore makes easiers to combine multiple reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer },
});
// if we have multiple reducers then we can create a object in reducer: {variable: variable.reducer}

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;
// by creating this we don't need to worry about unique identifiers as redux will create that for us

export default store;
// goto main index.js file there we have wrapped our store to whole app
//We should add all other states in action types when we update state otherwise that particular state will become undefined and can cause errors.
//Never mutate the state / never change original state: https://academind.com/tutorials/reference-vs-primitive-values/
