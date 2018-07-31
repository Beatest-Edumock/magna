import React from "react";
import {Route, Router, Switch, Link} from "react-router-dom";
import HomePage from "./HomePage/HomePage"
import LoginPage from "./LoginPage/LoginPage"
import history from "./__internals/CustomHistory";


const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={HomePage}/>

            <Route exact path="/login" component={LoginPage}/>
        </Switch>
    </Router>
);


export default Routes;
