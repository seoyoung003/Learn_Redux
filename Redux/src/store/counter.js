import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        incrementHandler(state) {//if문이 필요없는 이유는 어떤 액션 했느냐에 따라 메서드가 자동으로 호출되기 때문이다.
            state.counter++; //redux-toolkit과 createSlice를 사용하면 기존상태를 바꿀 수 없게한다 따라서서 다음과 같은 코드를 써도 된다.
        }, 
        decrementHandler(state) {
            state.counter--;
        },
        increaseHandler(state, action) {//increase는 다른 메서드와 다르게 추가 데이터가 필요하므로 action을 선택적으로 매개변수에 넣는다.
            state.counter = state.counter + action.payload;//payload라는 정해진 이름의 속성에 접근해야한다.
        },
        toggleCounterHandler(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;

export const counterActions = counterSlice.actions;//액션 객체 생성해준다. 이 코드를 통해 counterSlice에서 일치하는 함수 실행