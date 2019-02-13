import React, {Component} from 'react';
import {faXbox} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class XboxStatus extends Component {
    render() {
        return (
            <div>
                <h3>
                    <a href="https://live.xbox.com/en-US/Profile?gamertag=exoentropy">
                        <FontAwesomeIcon icon={faXbox}/></a> Xbox | <span
                    className={this.props.xboxStatus.state.toLowerCase()}>
                    {this.props.xboxStatus.state}</span>
                </h3>
                <h4>{this.props.xboxGamercard.gamerscore} Gamerscore</h4>
                {
                    this.props.xboxStatus.state === 'Offline' ? <h4>Last seen
                            playing {this.props.xboxStatus.lastSeen.titleName} on {this.props.xboxStatus.lastSeen.deviceType}</h4> :
                        <span></span>
                }
            </div>
        );
    }
}

export default XboxStatus;