import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import Spinner from './Spinner';
import BlogPreview from './BlogPreview';
import bLogo from '../assets/graphics/blog-b.svg';
import '../style/writing.css';

class Writing extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        document.title = 'Scott Enriquez | 一期一会';
        this.getRepos()
            .then((body) => {
                this.setState({blogPosts: body});
                this.setState({loading: false});
            })
            .catch((error) => console.log(error));
    }

    getRepos = async () => {
        const response = await fetch('https://api.scottie.gg/v1/blog/');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    renderBlogPreviews = () => {
        let blogPreviewsJSX = [];
        this.state.blogPosts.forEach((blogPost) => {
            blogPreviewsJSX.push(<BlogPreview key={blogPost.postID} blogPost={blogPost}/>);
        });
        return blogPreviewsJSX;
    };

    render() {
        return (
            <div>
                <MenuNavbar/>
                <div className="writing-intro content-center">
                    <img src={bLogo} alt="logo"/>
                    <br/>
                    <br/>
                    <h4>一期一会 by Scott Enriquez</h4>
                </div>
                <div className="container">
                    {
                        !this.state.loading ? this.renderBlogPreviews() : <Spinner/>
                    }
                </div>
            </div>
        );
    }
}

export default Writing;