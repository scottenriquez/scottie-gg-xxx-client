import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import Repo from './Repo';
import Spinner from './Spinner';
import cLogo from '../assets/graphics/code-c.svg';
import '../style/code.css';

class Code extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.getRepos()
            .then((response) => {
                this.setState({repos: response});
                this.setState({loading: true});
            })
            .catch((error) => console.log(error));
    }

    getRepos = async () => {
        const response = await fetch('https://www.scottie.gg/api/github/repos/');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    renderRepos = () => {
        let reposJSX = [];
        this.state.repos.forEach((repo) => {
            if (!repo.fork && !repo.private) {
                reposJSX.push(<Repo key={repo.id} repo={repo}/>);
            }
        });
        return reposJSX;
    };

    render() {
        return (
            <div>
                <MenuNavbar/>
                <div className="code-intro content-center">
                    <img src={cLogo} alt="logo"/>
                    <br/>
                    <br/>
                    <h4>Code by <a href="https://github.com/scottenriquez">@scottenriquez</a></h4>
                </div>
                <div className="container">
                    {
                        !this.state.loading ? this.renderRepos() : <Spinner/>
                    }
                </div>
            </div>
        );
    }
}

export default Code;
