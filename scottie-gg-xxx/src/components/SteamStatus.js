import React, {Component} from 'react';
import {faSteam} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SteamStatus extends Component {
    render() {
        return (
            <div>
                <h3><a href="https://steamcommunity.com/id/exoentropy"><FontAwesomeIcon icon={faSteam}/></a> Steam
                    | <span
                        className={this.props.steamStatus.state}>{this.props.steamStatus.state}</span>
                </h3>
                {
                    this.props.steamActivity.total_count > 0 ?
                        <h4>Last seen playing {this.props.steamActivity.games[0].name}</h4> : <span></span>
                }
            </div>
        );
    }
}

export default SteamStatus;