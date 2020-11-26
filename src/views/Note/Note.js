import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import ColorPicker from 'components/ColorPicker';

import Context from './Context';

class NodeView extends React.Component {
  handleColorSelect = (e, color) => {
    e.preventDefault();
    e.stopPropagation();
    this.context.setColor(color);
  };

  render() {
    return (
      <div>
        node
        {console.log(this.props)}
        <ColorPicker
          selectedColor={this.context.color}
          onColorSelect={this.handleColorSelect}
        />
      </div>
    );
  }
}

NodeView.contextType = Context;

export default withRouter(observer(NodeView));
