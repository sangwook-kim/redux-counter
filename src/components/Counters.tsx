import * as React from 'react';
import { Counter } from './Counter';

const Counters: React.SFC <{
  counters: any[];
  onIncrement: (i: number) => void;
  onDecrement: (i: number) => void;
  onSetColor: (i: number) => void;
}> = ({
  counters,
  onIncrement,
  onDecrement,
  onSetColor,
}) => {
  return (
  <ul>
    {counters.map((counter, i) => (
    <li key={i} >
      <Counter {...counter}
      key={i}
      onDecrement={() => { onDecrement(i); }}
      onIncrement={() => { onIncrement(i); }}
      onSetColor={() => { onSetColor(i); }}
      />
    </li>
    ))}
  </ul>
  );
};

export default Counters;
