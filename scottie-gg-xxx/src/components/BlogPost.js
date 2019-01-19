import React, {Component} from 'react';
import queryString from 'query-string';
import ReactHtmlParser from 'react-html-parser';
import MenuNavbar from "./MenuNavbar";
import Spinner from "./Spinner";

class BlogPost extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        this.getBlogPost(values.postID)
            .then((body) => {
                this.setState({blogPost: body});
                this.setState({loading: false});
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.innerHTML = body.BlogPostJavaScript;
                document.head.appendChild(script);
            })
            .catch((error) => console.log(error));
    }

    getBlogPost = async (postID) => {
        const response = await fetch('https://api.scottie.gg/v1/blog/?postID=' + postID);
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    renderBlogPost() {
        return (
            <div className="navbar-offset container">
                <h3>{this.state.blogPost.BlogTitle}</h3>
                <div>{ReactHtmlParser(this.state.blogPost.BlogPostHTML)}</div>
                <div dangerouslySetInnerHTML={{__html: "<script>console.log('hello');</script>"}}/>
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