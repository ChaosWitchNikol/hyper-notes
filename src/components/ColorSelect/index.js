import { observer } from 'mobx-react';

function ColorSelect({ selected, onClick, color }) {
  return (
    <div
      onClick={(e) => onClick && onClick(e, color)}
      className={`ColorSelect ${color}${selected ? ' Selected' : ''}`}
    />
  );
}

export default observer(ColorSelect);
