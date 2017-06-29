import React from 'react';
import { render } from 'react-dom';
import { TextBox } from 'common';

const SimpleApp = () => (
  <div>
    <h1>Client App</h1>
    <TextBox>
      <p>Hi!</p>
    </TextBox>
  </div>
);

render(
  <SimpleApp />,
  document.getElementById('root')
);
