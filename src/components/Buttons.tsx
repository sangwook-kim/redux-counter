import * as React from 'react';
import './Buttons.css';

/* tslint:disable:variable-name */
const Buttons: React.SFC<{
  onAdd: () => void;
  onRemove: () => void;
}> = ({
  onAdd,
  onRemove,
}) => {
  return (
    <div className="Buttons">
      <div className="btn add" onClick={onAdd}>
        생성
      </div>
      <div className="btn remove" onClick={onRemove}>
        제거
      </div>
    </div>

  );
};

export default Buttons;
