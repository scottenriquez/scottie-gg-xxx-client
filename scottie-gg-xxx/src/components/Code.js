import React, {Component} from 'react';
import ReactTable from 'react-table';
import MenuNavbar from './MenuNavbar';
import cLogo from '../assets/graphics/code-c.svg';
import '../style/code.css';

class Code extends Component {
    state = {
        loading: true,
        columns: [
            {
                Header: 'Name',
                accessor: 'name',
                Cell: cellInfo => <span><a href={cellInfo.row.html_url}>{cellInfo.row.name}</a></span>
            },
            {
                Header: 'URL',
                accessor: 'html_url',
                show: false
            },
            {
                Header: 'Language',
                accessor: 'language',
                maxWidth: 100
            }
        ]
    };

    componentDidMount() {
        this.getRepos()
            .then((response) => this.setState({repos: response}))
            .catch((error) => console.log(error));
    }

    getRepos = async () => {
        const response = await fetch('https://www.scottie.gg/api/github/repos/');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        if (body) {
            this.setState({loading: false});
        }
        return body;
    };

    render() {
        return (
            <div>
                <MenuNavbar/>
                <div className="code-intro content-center">
                    <img src={cLogo} alt="logo" />
                    <br />
                    <br />
                    <h4>Code by <a href="https://github.com/scottenriquez">@scottenriquez</a></h4>
                </div>
                <div className="container">
                    <ReactTable className="-striped table-background" data={this.state.repos} columns={this.state.columns} defaultPageSize={25}/>
                </div>
            </div>
        );
    }
}

export default Code;
