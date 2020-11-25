import { observable, computed, action, toJS, makeObservable } from 'mobx';
import { ColorDefault } from 'constants/Colors';

class AppStore {
  constructor() {
    makeObservable(this, {
      color: observable,
      setColor: action,
    });
  }

  color = ColorDefault;
  setColor(color = ColorDefault) {
    this.color = color;
  }
}

export default AppStore;
