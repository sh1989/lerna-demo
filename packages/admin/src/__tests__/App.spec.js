import React from 'react';
import App from '../App';
import ShallowRenderer from 'react-test-renderer/shallow';

test('App Component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <App />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});