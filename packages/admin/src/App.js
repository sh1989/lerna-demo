import { Notification } from 'common';
import React from 'react';
import Title from './Title';

const App = () => (
    <div>
        <h1>Admin App!</h1>
        <Title />
        <Notification msg="Shh! This is the secret app!" />
    </div>
);

export default App;