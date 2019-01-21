import React, {Component} from 'react';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../style/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="container content-center footer-padding">
                <p><FontAwesomeIcon icon={faCode}/><a className="ahamono" href="/"> {window.location.hostname.replace('www.','')}</a></p>
            </div>
        );
    }
}

export default Footer;