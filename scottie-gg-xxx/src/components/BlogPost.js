import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import Prism from 'prismjs';
//eslint-disable-next-line
import Java from 'prismjs/components/prism-java.min';
//eslint-disable-next-line
import CSharp from 'prismjs/components/prism-csharp.min';
//eslint-disable-next-line
import Python from 'prismjs/components/prism-python.min';
import MenuNavbar from './MenuNavbar';
import Spinner from './Spinner';
import BlogTags from './BlogTags';
import '../style/prism.css';

class BlogPost extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const {blogPostURL} = this.props.match.params;
        this.getBlogPost(blogPostURL)
            .then((body) => {
                document.title = '一期一会 | ' + body.blogPostTitle;
                this.setState({blogPost: body});
                this.setState({loading: false});
                if (body.blogPostJavaScript) {
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.async = true;
                    script.innerHTML = body.blogPostJavaScript;
                    document.head.appendChild(script);
                }
                Prism.highlightAll();
            })
            .catch((error) => console.log(error));
    }

    getBlogPost = async (blogPostURL) => {
        const response = await fetch('https://api.scottie.gg/v1/blog/?blogPostURL=' + blogPostURL);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    renderBlogPost() {
        return (
            <div className="navbar-offset container">
                <h1>{this.state.blogPost.blogPostTitle}</h1>
                <h4>{this.state.blogPost.blogPostDate} | <BlogTags key={this.state.blogPost.postID + '-tags'}
                                                                   postID={this.state.blogPost.postID}
                                                                   blogTags={this.state.blogPost.blogPostTags}/></h4>
                <br />
                <div>{ReactHtmlParser(this.state.blogPost.blogPostHTML)}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <MenuNavbar/>
                {!this.state.loading ? this.renderBlogPost() : <Spinner/>}
            </div>
        );
    }
}

export default BlogPost;