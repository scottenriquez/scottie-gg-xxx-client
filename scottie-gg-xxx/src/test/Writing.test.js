import React from 'react';
import ReactDOM from 'react-dom';
import Writing from '../components/Writing';

it('renders Writing without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Writing />, div);
    ReactDOM.unmountComponentAtNode(div);
});