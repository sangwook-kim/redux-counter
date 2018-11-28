import * as React from 'react';
import './Counter.css';

/* tslint:disable:variable-name */
const Counter: React.SFC<{
  number?: number;
  color?: string;
  index?: number;
  onIncrement?: (index: number) => void;
  onDecrement?: (index: number) => void;
  onSetColor?: (index: number) => void;
}> = (props) => {
  const {
    number = 0,
    color = 'black',
    index = 0,
    onIncrement = () => console.warn('onIncrement not defined'),
    onDecrement = () => console.warn('onDecrement not defined'),
    onSetColor = () => console.warn('onSetColor not defined'),
  } = props;

  return (
    <div className="Counter" onClick={() => onIncrement(index)}
    onContextMenu={(e) => { e.preventDefault(); onDecrement(index); }}
    onDoubleClick={() => onSetColor(index)} style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};

export default Counter;
