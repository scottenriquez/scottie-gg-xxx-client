import React from 'react';
import ReactDOM from 'react-dom';
import Code from './Code';

it('renders Code without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Code />, div);
    ReactDOM.unmountComponentAtNode(div);
});
