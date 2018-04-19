import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { modules, requestLogin, login } from 'common';
import App from './App';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-y'
    changePositionKey='ctrl-q'
    defaultIsVisible={true}>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

const store = createStore(
  modules,
  {},
  DevTools.instrument()
);

const AdminApp = () => (
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>
);

render(
  <AdminApp />,
  document.getElementById('root')
);

store.dispatch(requestLogin());
store.dispatch(login('Mr Admin'));
