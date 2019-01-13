import React, {Component} from 'react';

class BlogTags extends Component {
    renderBlogTags() {
        let blogTagsJSX = [];
        let index = 0;
        const lastBlogTagIndex = this.props.blogTags.length - 1;
        this.props.blogTags.forEach((tag) => {
            if(index < lastBlogTagIndex) {
                blogTagsJSX.push(<span key={this.props.postID + '-tags-' + index}>{tag}, </span>);
            }
            index++;
        });
        blogTagsJSX.push(<span key={this.props.postID + '-tags-' + index}>{this.props.blogTags[lastBlogTagIndex]}</span>);
        return blogTagsJSX;
    }

    render() {
        return (
            <span>
                {
                    this.renderBlogTags()
                }
            </span>
        );
    }
}

export default BlogTags;