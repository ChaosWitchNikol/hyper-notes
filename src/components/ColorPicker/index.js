import { observer } from 'mobx-react';

import ColorSelect from 'components/ColorSelect';
import Colors, { ColorDefault } from 'constants/Colors';

function ColorPicker({ selectedColor = ColorDefault, onColorSelect }) {
  return (
    <div className={`ColorPicker`}>
      {Colors.map((color) => (
        <ColorSelect
          key={color}
          color={color}
          selected={color === selectedColor}
          onClick={onColorSelect}
        />
      ))}
    </div>
  );
}

export default observer(ColorPicker);
