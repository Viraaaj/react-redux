//Install packages: npm init -y
//Install redux: nnpm install redux

const redux = require("redux");

// adding reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// creating store
//We need to pass reducer to store so that it knows which reducer is responsible for changing that store
const store = redux.createStore(counterReducer);

// if we want state we can do this rather than dispatching:
// console.log("State is without using dispatch:", store.getState());

//subscription
const counterSubscriber = () => {
  const latestState = store.getState(); //using store.getState() will gives us latest state after updation
  console.log("latestState is:", latestState);
};

// calling subscribe method on store
store.subscribe(counterSubscriber);

//Dispatching action
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
