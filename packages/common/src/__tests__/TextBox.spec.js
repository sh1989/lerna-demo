import React from 'react';
import TextBox from '../TextBox';
import ShallowRenderer from 'react-test-renderer/shallow';

test('TextBox Component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
        <TextBox>
            <p>Text</p>
            <p>More Text</p>
        </TextBox>
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
});