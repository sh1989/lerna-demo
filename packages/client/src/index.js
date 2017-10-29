import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import { TextBox, modules, requestLogin, login } from 'common';

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

const SimpleApp = () => (
  <Provider store={store}>
    <div>
      <div>
        <h1>Client App</h1>
        <TextBox>
          <p>Hi!</p>
        </TextBox>
      </div>
      <DevTools />
    </div>
  </Provider>
);

render(
  <SimpleApp />,
  document.getElementById('root')
);

store.dispatch(requestLogin());
store.dispatch(login('A. User'));
