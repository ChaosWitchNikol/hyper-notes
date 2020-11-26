import { observable, computed, action, toJS, makeObservable } from 'mobx';
import { ColorDefault } from 'constants/Colors';

class NoteStore {
  constructor() {
    makeObservable(this, {
      _color: observable,
      color: computed,
      setColor: action,
    });
  }

  _color = ColorDefault;
  get color() {
    return this._color;
  }
  setColor(color = ColorDefault) {
    this._color = color;
  }
}

export default NoteStore;
