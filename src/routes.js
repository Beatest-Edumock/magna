import React from "react";
import {BrowserRouter as Router, Redirect, Route, Link, Switch} from "react-router-dom";

import HomePage from "./HomePage/HomePage"

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage}/>
        </Switch>
    </Router>
);


export default Routes