import React from 'react';
import { render } from 'react-dom';
import { Notification } from 'common';

const AdminApp = () => (
  <div>
    <h1>Admin App</h1>
    <Notification msg="This is the secret app!" />
  </div>
);

render(
  <AdminApp />,
  document.getElementById('root')
);
