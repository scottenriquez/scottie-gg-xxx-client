import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import sLogo from '../assets/graphics/scott-s.svg';
import '../style/homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="one-hundred-percent-height intro">
                <MenuNavbar/>
                <div className="page-center">
                    <img src={sLogo} alt="logo"/>
                    <br /><br />
                    <h5 className="to-uppercase ahamono">Developer | Leader | Teacher</h5>
                </div>
            </div>
        );
    }
}

export default Homepage;
