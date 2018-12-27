import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Code from "./components/Code";

const App = () => (
    <Router>
        <div className="one-hundred-percent-height">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/code" component={Code} />
        </div>
    </Router>
);

export default App;
