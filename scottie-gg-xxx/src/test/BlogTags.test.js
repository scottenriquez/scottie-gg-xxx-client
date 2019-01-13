import React from 'react';
import ReactDOM from 'react-dom';
import BlogTags from '../components/BlogTags';

it('renders BlogTags without crashing', () => {
    const div = document.createElement('div');
    const postID = "1";
    const blogTags = ["Programming"];
    ReactDOM.render(<BlogTags postID={postID} blogTags={blogTags}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});