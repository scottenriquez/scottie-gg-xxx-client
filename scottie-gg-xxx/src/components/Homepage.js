import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import sLogo from '../assets/graphics/scott-s.svg';
import '../style/homepage.css';

class Homepage extends Component {
    componentDidMount() {
        document.title = 'Scott Enriquez | Homepage';
    }

    render() {
        return (
            <div className="one-hundred-percent-height">
                <MenuNavbar/>
                <div className="homepage-intro">
                    <div className="page-center container">
                        <img src={sLogo} alt="logo"/>
                        <br /><br />
                        <h4 className="to-uppercase ahamono">Developer | Leader | Teacher</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
