/* action 객체를 만드는 액션 생성 함수들을 선언합니다 (action creators).  */

import * as types from './ActionTypes';

export const increment = (index: number) => ({
  index,
  type: types.INCREMENT,
});

export const decrement = (index: number) => ({
  index,
  type: types.DECREMENT,
});

// 다른 액션 생성자들과 달리 파라미터를 갖고 있습니다.
export const setColor = (index: number, color: string) => ({
  color,
  index,
  type: types.SET_COLOR,
});

export const addCounter = () => ({
  type: types.ADD_COUNTER,
});

export const removeCounter = () => ({
  type: types.REMOVE_COUNTER,
});
