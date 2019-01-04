import React from 'react';
import ReactDOM from 'react-dom';
import MenuNavbar from '../components/MenuNavbar';

it('renders MenuNavbar without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MenuNavbar />, div);
    ReactDOM.unmountComponentAtNode(div);
});