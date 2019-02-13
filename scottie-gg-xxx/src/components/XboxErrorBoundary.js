import React, {Component} from 'react';
import {faXbox} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class XboxErrorBoundary extends Component {
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
                        <a href="https://live.xbox.com/en-US/Profile?gamertag=exoentropy">
                            <FontAwesomeIcon icon={faXbox}/></a> Xbox | <span className="offline">Offline</span>
                    </h3>
                    <h4>Looks like I can't connect to the Xbox servers for some reason. Feel free to try again later.</h4>
                </div>
            );
        }
        return this.props.children;
    }
}

export default XboxErrorBoundary;