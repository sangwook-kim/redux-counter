import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다.
const initialState = {
  color: '#000',
};

/* 리듀서 함수를 정의합니다. 리듀서는 state와 action을 파라미터로 받습니다.
 * state가 undefined일 때(스토어가 생성될 때) state 기본값을 initialState로 사용합니다.
 * action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
 * 이 때 주의할 점은 state를 직접 수정하면 안 되고,
 * 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야 합니다.
 */
export default function color(state = initialState, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color,
      };
    default:
      return state;
  }
}
