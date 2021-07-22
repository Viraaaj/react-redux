import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  // Without toolkit
  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "hideCounter" });
  // };

  // With toolkit
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  //Here if we have payload we can pass the value of payload ot an object and that value is stored as payload by default so we need to change that variable in store

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter ? (
        <div className={classes.value}>{counter}</div>
      ) : (
        <div className={classes.value}>**</div>
      )}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//we use useSelector() hook because by using that we can use part of stores in components
// If we are using class based components we can use connect also

// While using dispatch we need to create respective functions and inside that function use dispatch with action
// like above in our store we declared type increment and decrement use same as there

// Redux in class based Components
// import React, { Component } from 'react'
// import { counterActions } from './../store/index';
// export class CounterClass extends Component {

//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>

//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//     counter: state.counter,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass)
// we need to use connect when using the class based components
