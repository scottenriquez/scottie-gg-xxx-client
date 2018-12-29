import React, {Component} from 'react';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Spinner extends Component {
    render() {
        return (
            <div className="content-center content-padding">
                <h3>読み込み中…</h3>
                <FontAwesomeIcon icon={faSpinner} spin/>
            </div>
        );
    }
}

export default Spinner;