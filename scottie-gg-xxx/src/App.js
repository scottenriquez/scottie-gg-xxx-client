import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Code from './components/Code';
import Writing from './components/Writing';
import BlogPost from './components/BlogPost';
import Gaming from './components/Gaming';
import Meta from './components/Meta';

const App = () => (
    <Router>
        <div className="one-hundred-percent-height">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/writing/:blogPostURL" component={BlogPost} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/meta" component={Meta} />
        </div>
    </Router>
);

export default App;
