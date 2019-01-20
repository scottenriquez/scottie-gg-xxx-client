import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import MenuNavbar from "./MenuNavbar";
import Spinner from "./Spinner";

class BlogPost extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const {blogPostURL} = this.props.match.params;
        this.getBlogPost(blogPostURL)
            .then((body) => {
                this.setState({blogPost: body});
                this.setState({loading: false});
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.innerHTML = body.blogPostJavaScript;
                document.head.appendChild(script);
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