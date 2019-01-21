import React from 'react';
import ReactDOM from 'react-dom';
import BlogPreview from '../components/BlogPreview';

it('renders BlogPreview without crashing', () => {
    const div = document.createElement('div');
    const blogPost = {
        blogPostTitle: 'A Title',
        blogPostTags: ['Programming']
    };
    ReactDOM.render(<BlogPreview blogPost={blogPost} />, div);
    ReactDOM.unmountComponentAtNode(div);
});