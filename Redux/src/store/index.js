import {configureStore}  from '@reduxjs/toolkit'//configureStore은 여러개의 리듀서를 하나의 리듀서로 합칠 수 있다. 객체를 인수로 준다다

import counterReducer from './counter';
import authReducer from './auth';



const store = configureStore({
    reducer: {auth: authReducer,  counter: counterReducer} //slice가 여러개일 때는 키와 값으로 구성된 객체 값을 주면 된다.
});



export default store;


// const counterReduxer = (state = initialState, action) => {  툴킷이 아닌 일반 리덕스 사용시
//     if(action.type === 'increment') {
//         return{
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase') {
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle') {
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }
