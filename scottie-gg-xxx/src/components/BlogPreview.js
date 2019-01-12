import React, {Component} from 'react';

class BlogPreview extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.blogPost.BlogTitle}</h3>
                <h5>{this.props.blogPost.BlogPostDate}</h5>
                <p>{this.props.blogPost.BlogPostShortDescription}</p>
                <br/>
            </div>
        );
    }
}

export default BlogPreview;
