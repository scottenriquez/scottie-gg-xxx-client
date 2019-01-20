import React, {Component} from 'react';
import BlogTags from "./BlogTags";

class BlogPreview extends Component {
    render() {
        return (
            <div>
                <h3><a href={'/writing/' + this.props.blogPost.blogPostURL}>{this.props.blogPost.blogPostTitle}</a></h3>
                <h5>{this.props.blogPost.blogPostDate} | <BlogTags key={this.props.blogPost.postID + '-tags'}
                                                                   postID={this.props.blogPost.postID}
                                                                   blogTags={this.props.blogPost.blogPostTags}/></h5>
                <p>{this.props.blogPost.blogPostShortDescription}</p>
                <br/>
            </div>
        );
    }
}

export default BlogPreview;
