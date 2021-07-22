import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

//we can create different slices for different functionality
// in slice we need to add :
// 1. name: it could be anything not necessary to match with state
// 2. initialState: above state
// 3. reducers: object containing methods

//While using slice we can mutate state cause redux toolkit uses package imgur which will detect code and clone state,
// create new object and keep all states we are not editing and overrides states which we are editing
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//As we are using slice we don't need this reducer
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     // state.counter++ //Never do this, though this will works but it will cause some errors in application
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "hideCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };
// const store = createStore(counterReducer);

// =>ConfigureStore makes easiers to combine multiple reducers
const store = configureStore({
  reducer: counterSlice.reducer,
});

// if we have multiple reducers then we can create a object in reducer: {variable: variable.reducer}

export default store;
// goto main index.js file there we have wrapped our store to whole app
//We should add all other states in action types when we update state otherwise that particular state will become undefined and can cause errors.
//Never mutate the state / never change original state: https://academind.com/tutorials/reference-vs-primitive-values/
