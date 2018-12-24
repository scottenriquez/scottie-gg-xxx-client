import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import sLogo from '../assets/graphics/scott-s.svg';
import '../style/homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="fullscreen">
                <MenuNavbar/>
                <div className="intro fullscreen">
                    <div className="fullscreen page-center">
                        <img src={sLogo} alt="logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
