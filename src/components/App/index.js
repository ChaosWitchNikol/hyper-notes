import { observer, inject } from 'mobx-react';

import Routes from './Routes';

function App(props) {
  return (
    <div className={`App ${props.App.color}`}>
      <Routes />
    </div>
  );
}

export default inject('App')(observer(App));
