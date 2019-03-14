import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './routes';
import reducers from './reducers';

export default props => (
  <Provider store={createStore(reducers)}>
    <Routes />
  </Provider>
);