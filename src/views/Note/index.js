import React from 'react';
import { observer } from 'mobx-react';

import Note from './Note';
import Store from './Store';
import Context from './Context';

class NoteView extends React.Component {
  #store = new Store();
  render() {
    return (
      <Context.Provider value={this.#store}>
        <Note />
      </Context.Provider>
    );
  }
}

export default observer(NoteView);
