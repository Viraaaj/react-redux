import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authenticationSlice from "./authSlice";

// =>ConfigureStore makes easiers to combine multiple reducers
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authenticationSlice.reducer },
});
// if we have multiple reducers then we can create a object in reducer: {variable: variable.reducer}

export default store;
// goto main index.js file there we have wrapped our store to whole app
//We should add all other states in action types when we update state otherwise that particular state will become undefined and can cause errors.
//Never mutate the state / never change original state: https://academind.com/tutorials/reference-vs-primitive-values/
