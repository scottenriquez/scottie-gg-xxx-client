import React, {Component} from 'react';
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Repo extends Component {
    render() {
        return (
            <div>
                <h3><FontAwesomeIcon icon={faCodeBranch}/> {this.props.repo.name}</h3>
                <h5>{this.props.repo.stargazers_count} <FontAwesomeIcon
                    icon={faStar}/> | {this.props.repo.language} | <a href={this.props.repo.html_url}><FontAwesomeIcon
                    icon={faLink}/></a></h5>
                <p>{this.props.repo.description}</p>
                <br/>
            </div>
        );
    }
}

export default Repo;
