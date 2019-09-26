import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Coding from './components/Coding';
import Writing from './components/Writing';
import BlogPost from './components/BlogPost';
import Gaming from './components/Gaming';
import Meta from './components/Meta';

//polyfill for Fetch API for legacy browsers
//eslint-disable-next-line
import isomorphic_fetch from 'isomorphic-fetch';
import {polyfill} from 'es6-promise';
polyfill();

const App = () => (
    <Router>
        <div className="one-hundred-percent-height">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/coding" component={Coding} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/writing/:blogPostURL" component={BlogPost} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/meta" component={Meta} />
        </div>
    </Router>
);

export default App;
