import React, {Component} from 'react';
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Repo extends Component {
    render() {
        return (
            <div>
                <h3><FontAwesomeIcon icon={faCodeBranch}/> <a href={this.props.repo.html_url}>{this.props.repo.name}</a></h3>
                <h5>{this.props.repo.stargazers_count} <FontAwesomeIcon
                    icon={faStar}/> | {this.props.repo.language}</h5>
                <p>{this.props.repo.description}</p>
                <br/>
            </div>
        );
    }
}

export default Repo;
