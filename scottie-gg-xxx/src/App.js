import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

const App = () => (
    <Router>
        <div className="one-hundred-percent-height">
            <Route exact path="/" component={Homepage} />
        </div>
    </Router>
);

export default App;
