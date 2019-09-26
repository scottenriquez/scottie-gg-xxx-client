import React from 'react';
import ReactDOM from 'react-dom';
import Coding from '../components/Code';

it('renders Code without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Coding />, div);
    ReactDOM.unmountComponentAtNode(div);
});
