import * as React from 'react';
import './Counter.css';

/* tslint:disable:variable-name */
export const Counter: React.SFC<{
  number?: number;
  color?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onSetColor?: () => void;
}> = (props) => {
  const {
    number = 0,
    color = 'black',
    onIncrement = () => console.warn('onIncrement not defined'),
    onDecrement = () => console.warn('onDecrement not defined'),
    onSetColor = () => console.warn('onSetColor not defined'),
  } = props;

  return (
    <div className="Counter" onClick={onIncrement}
    onContextMenu={(e) => { e.preventDefault(); onDecrement(); }}
    onDoubleClick={onSetColor} style={{ backgroundColor: color }}
    >
      {number}
    </div>
  );
};
