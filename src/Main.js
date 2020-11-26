import React from 'react';

import { Provider as MobXProvider } from 'mobx-react';
import store from 'store';

import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';

import './styles/index.scss';

class Main extends React.Component {
  render() {
    return (
      <MobXProvider {...store}>
        <Router>
          <App />
        </Router>
      </MobXProvider>
    );
  }
}

export default Main;
