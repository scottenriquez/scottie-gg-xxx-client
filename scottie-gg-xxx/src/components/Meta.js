import React, {Component} from 'react';
import MenuNavbar from './MenuNavbar';
import '../style/meta.css';

class Meta extends Component {
    componentDidMount() {
        document.title = 'Scott Enriquez | Meta';
    }

    render() {
        return (
            <div className="one-hundred-percent-height">
                <MenuNavbar/>
                <div className="meta-intro">
                    <div className="page-center">
                        <p>
                            This site was created using React and is built on a serverless architecture hosted by Amazon Web
                            Services. The source code, README, and issue tracker for this site are located on <a href="https://github.com/scottenriquez/scottie-gg-xxx-client">GitHub</a>.
                        </p>
                        <p>
                            I use the Ahamono font by Alfredo Marco Pradil, and my license can be found <a href="https://www.myfonts.com/viewlicense?type=web&buildid=3589525">here</a>.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Meta;