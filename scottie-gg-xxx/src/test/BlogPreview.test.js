import React from 'react';
import ReactDOM from 'react-dom';
import BlogPreview from '../components/BlogPreview';

it('renders BlogPreview without crashing', () => {
    const div = document.createElement('div');
    const blogPost = {
        BlogTitle: 'A Title'
    };
    ReactDOM.render(<BlogPreview blogPost={blogPost} />, div);
    ReactDOM.unmountComponentAtNode(div);
});