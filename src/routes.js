import React from "react";
import {Route, Router, Switch, Link} from "react-router-dom";
import history from "./__internals/CustomHistory";
import {AnimatedSwitch} from 'react-router-transition';

import HomePage from "./HomePage/HomePage"
import LoginPage from "./LoginPage/LoginPage"
import ResendActivationPage from "./ResendActivationPage/ResendActivationPage"

const Routes = () => (
    <Router history={history}>
        <AnimatedSwitch
            atEnter={{opacity: 0}}
            atLeave={{opacity: 1}}
            atActive={{opacity: 1}}
        >
            <Route exact path="/" component={HomePage}/>

            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/resend-activation" component={ResendActivationPage}/>
        </AnimatedSwitch>
    </Router>
);


export default Routes;
