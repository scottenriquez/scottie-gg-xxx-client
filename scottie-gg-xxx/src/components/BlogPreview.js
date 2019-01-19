import React, {Component} from 'react';
import BlogTags from "./BlogTags";

class BlogPreview extends Component {
    render() {
        return (
            <div>
                <h3><a href={'/post/?postID=' + this.props.blogPost.PostID}>{this.props.blogPost.BlogTitle}</a></h3>
                <h5>{this.props.blogPost.BlogPostDate} | <BlogTags key={this.props.blogPost.PostID + '-tags'}
                                                                   postID={this.props.blogPost.PostID}
                                                                   blogTags={this.props.blogPost.BlogTags}/></h5>
                <p>{this.props.blogPost.BlogPostShortDescription}</p>
                <br/>
            </div>
        );
    }
}

export default BlogPreview;
