import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import Footer from './Footer';
import Spinner from './Spinner';
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
                <h3>
                    <a href="https://live.xbox.com/en-US/Profile?gamertag=exoentropy">
                        <FontAwesomeIcon icon={faXbox}/></a> Xbox | <span
                    className={this.state.gamingStatus.xboxStatus.state.toLowerCase()}>
                    {this.state.gamingStatus.xboxStatus.state}</span>
                </h3>
                <h4>{this.state.gamingStatus.xboxGamercard.gamerscore} Gamerscore</h4>
                {
                    this.state.gamingStatus.xboxStatus.state === 'Offline' ? <h4>Last seen
                            playing {this.state.gamingStatus.xboxStatus.lastSeen.titleName} on {this.state.gamingStatus.xboxStatus.lastSeen.deviceType}</h4> :
                        <span></span>
                }
                <br/>
                <h3><a href="https://steamcommunity.com/id/exoentropy"><FontAwesomeIcon icon={faSteam}/></a> Steam
                    | <span
                        className={this.state.gamingStatus.steamStatus.state}>{this.state.gamingStatus.steamStatus.state}</span>
                </h3>
                {
                    this.state.gamingStatus.steamActivity.total_count > 0 ?
                        <h4>Last seen playing {this.state.gamingStatus.steamActivity.games[0].name}</h4> : <span></span>
                }
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
                <Footer/>
            </div>
        );
    }
}

export default Gaming;
