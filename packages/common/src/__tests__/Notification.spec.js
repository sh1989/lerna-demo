import React from 'react';
import Notification from '../Notification';
import ShallowRenderer from 'react-test-renderer/shallow';

test('Notification Component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <Notification msg="A message" />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});