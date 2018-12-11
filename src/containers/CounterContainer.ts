import { connect } from 'react-redux';
import * as actions from '../actions';
import Counters from '../components/Counters';
import { getRandomColor } from '../lib/util';

// store 안의 state 갑을 props로 연결합니다.
const mapStateToProps = state => ({
  counters: state.counters,
});

/* 액션 생성 함수를 사용하여 액션을 생성하고,
 * 해당 액션을 dispatch하는 함수를 만든 후 이를 props로 연결합니다.
 */
const mapDispatchToProps = dispatch => ({
  onIncrement: (index: number) => dispatch(actions.increment(index)),
  onDecrement: (index: number) => dispatch(actions.decrement(index)),
  onSetColor: (index: number) => {
    const color = getRandomColor();
    dispatch(actions.setColor(index, color));
  },
});

// Counter 컴포넌트의 Container 컴포넌트
// Counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 합니다.
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counters);

export default CounterContainer;
