import * as React from 'react';

import './Buttons.css';

const Buttons: React.SFC<{
  onCreate?: () => void;
  onRemove?: () => void;
}> = (props) => {
  const {
    onCreate = () => console.warn('onCreate not defined'),
    onRemove = () => console.warn('onRemove not defined'),
  } = props;

  return (
    <div className="Buttons">
      <div className="btn add" onClick={onCreate}>생성</div>
      <div className="btn remove" onClick={onRemove}>제거</div>
    </div>
  );
};

export default Buttons;
