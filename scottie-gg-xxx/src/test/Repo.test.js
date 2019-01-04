import React from 'react';
import ReactDOM from 'react-dom';
import Repo from '../components/Repo';

it('renders Repo without crashing', () => {
    const div = document.createElement('div');
    const repo = {
        name: 'dummy-repo',
        stargazers_count: '4',
        language: 'JavaScript',
        html_url: 'https://github.com/scottenriquez/dummy-repo'
    };
    ReactDOM.render(<Repo repo={repo} />, div);
    ReactDOM.unmountComponentAtNode(div);
});