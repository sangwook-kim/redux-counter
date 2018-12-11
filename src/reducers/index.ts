import * as types from '../actions/ActionTypes';
import number from './number';
import color from './color';

// 초기 상태를 정의합니다.
const initialState = {
  counters: [],
};

/* 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
 * state가 undefined일 때(스토어가 생성될 때) state 기본값을 initialState로 사용합니다.
 * action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
 * 이 때 주의할 점은 state를 직접 수정하면 안 되고,
 * 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
 */
export default function reducers(state = initialState, action) {
  const { index } = action;

  switch (action.type) {
    case types.ADD_COUNTER:
      return {
        counters: [...state.counters,
          { ...number(undefined, action), ...color(undefined, action) },
        ],
      };
    case types.REMOVE_COUNTER:
      return {
        counters: state.counters.slice(0, state.counters.length - 1),
      };
    case types.SET_COLOR:
      return {
        counters: [...state.counters.slice(0, index),
          Object.assign({}, state.counters[index], color(state.counters[index], action)),
          ...state.counters.slice(index + 1)],
      };
    case types.INCREMENT:
    case types.DECREMENT:
      return {
        counters: [...state.counters.slice(0, index),
          Object.assign({}, state.counters[index], number(state.counters[index], action)),
          ...state.counters.slice(index + 1)],
      };
    default:
      return state;
  }
}
