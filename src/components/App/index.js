import { observer, inject } from 'mobx-react';

function App(props) {
  return (
    <div className={`App ${props.App.color}`}>
      <div></div>
    </div>
  );
}

export default inject('App')(observer(App));
