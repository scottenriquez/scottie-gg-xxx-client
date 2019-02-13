import React, {Component} from 'react';
import {faSteam} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class SteamErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h3>
                        <a href="https://steamcommunity.com/id/exoentropy"><FontAwesomeIcon icon={faSteam}/></a> Steam
                        | <span
                            className="offline">Offline</span>
                    </h3>
                    <h4>Looks like I can't connect to the Steam servers for some reason. Feel free to try again later.</h4>
                </div>
            );
        }
        return this.props.children;
    }
}

export default SteamErrorBoundary;