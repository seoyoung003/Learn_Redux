import { useSelector, useDispatch } from 'react-redux';

// import { Component } from 'react';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);//useSelector 사용시 react-redux는 이 컴포넌트를 리덕스 저장소에 자동으로 구독 설정함함
  const show = useSelector(state => state.counter.showCounter);//slice가 여러개가 되면서 counter라는 값을 명시해줘야함함

  const incrementHandler = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.incrementHandler());
  }

  const increaseHandler= () => {
    // dispatch({type: 'increase', amount: 5})
    dispatch(counterActions.increaseHandler(10)); //amount대신 increase에 원하는 payload값을 넣어주면 됨 payload는 정해진 필드명임. {type: IDENTIFIER, payload: 10}
  }

  const decrementHandler = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrementHandler());
  }

  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounterHandler());
  };

return (
  <main className={classes.counter}>
    <h1>Redux Counter</h1>
    {show && <div className={classes.value}>{counter}</div>} 
    {/* show 가 참일때만 div 렌더링함 */}
    <div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increaseby5</button>
      <button onClick={decrementHandler}>decrement</button>
    </div>
    <button onClick={toggleCounterHandler}>Toggle Counter</button>
  </main>
);

};

export default Counter;

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {
    
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps) (Counter);
