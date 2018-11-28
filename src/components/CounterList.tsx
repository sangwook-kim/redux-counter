import * as React from 'react';
import Counter from './Counter';
import './CounterList.css';

const CounterList: React.SFC<{
  counters?: {
    color: string;
    number: number;
  }[];
  onIncrement: () => void;
  onDecrement: () => void;
  onSetColor: () => void;
}> = (props) => {
  const {
    counters = [],
    onIncrement,
    onDecrement,
    onSetColor,
  } = props;

  const counterList = counters.map(
    (counter, i) => (
      <Counter
      key={i}
      index={i}
      {...counter}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
      onSetColor={onSetColor}
      />
    ),
  );

  return (
    <div className="CounterList">
      {counterList}
    </div>
  );
};

export default CounterList;
