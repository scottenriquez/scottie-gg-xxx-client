import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import Footer from './Footer';
import Spinner from './Spinner';
import XboxErrorBoundary from './XboxErrorBoundary';
import SteamErrorBoundary from './SteamErrorBoundary';
import XboxStatus from './XboxStatus';
import SteamStatus from './SteamStatus';
import {faXbox} from '@fortawesome/free-brands-svg-icons';
import {faSteam} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../style/gaming.css';

class Gaming extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        document.title = 'Scott Enriquez | Gaming';
        this.getGamingStatus()
            .then((body) => {
                body.steamStatus.state = body.steamStatus.players[0].personastate === 1 ? 'online' : 'offline';
                this.setState({gamingStatus: body});
                this.setState({loading: false});
            })
            .catch((error) => console.log(error));
    }

    getGamingStatus = async () => {
        const response = await fetch('https://api.scottie.gg/v1/gaming/');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    renderGamingStatus = () => {
        return (
            <div>
                <SteamErrorBoundary>
                    <SteamStatus steamStatus={this.state.gamingStatus.steamStatus} steamActivity={this.state.gamingStatus.steamActivity}/>
                </SteamErrorBoundary>
                <br/>
                <XboxErrorBoundary>
                    <XboxStatus xboxStatus={this.state.gamingStatus.xboxStatus} xboxGamercard={this.state.gamingStatus.xboxGamercard} xboxActivity={this.state.gamingStatus.xboxActivity}/>
                </XboxErrorBoundary>
                <Footer/>
            </div>
        );
    };

    render() {
        return (
            <div>
                <MenuNavbar/>
                <div className="gaming-intro content-center">
                    <h2><a href="https://live.xbox.com/en-US/Profile?gamertag=exoentropy"><FontAwesomeIcon
                        icon={faXbox}/></a> <a href="https://steamcommunity.com/id/exoentropy"><FontAwesomeIcon
                        icon={faSteam}/></a></h2>
                    <h4>Gaming with Scott Enriquez</h4>
                </div>
                <div className="container">
                    {
                        !this.state.loading ? this.renderGamingStatus() : <Spinner/>
                    }
                </div>
            </div>
        );
    }
}

export default Gaming;
