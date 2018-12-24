import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import '../style/homepage.css';

class Homepage extends Component {
    render() {
        return (
            <div className="fullscreen">
                <MenuNavbar/>
                <div className="intro">

                </div>
            </div>
        );
    }
}

export default Homepage;
