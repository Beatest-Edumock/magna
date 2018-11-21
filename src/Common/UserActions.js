import React from 'react';
import {NavLink} from 'react-router-dom'
import {LOGIN_ROUTE, RESEND_ACTIVATION_ROUTE, SIGNUP_ROUTE} from "../route";

import {withRouter} from "react-router";

// forgot password, resend activation, signup , login
function UserActionsWithRouter(props) {
    return (
        <div>
            <NavLink to="/forgot-pass" className="text-light " activeClassName="d-none text-danger">forgot password</NavLink>
            {props.location.pathname !== "/forgot-pass" && <br/>}

            <NavLink to={RESEND_ACTIVATION_ROUTE()} className="text-light " activeClassName="d-none text-danger">resend activation</NavLink>
            {props.location.pathname !== RESEND_ACTIVATION_ROUTE() && <br/>}

            <NavLink to={SIGNUP_ROUTE()} className="text-light" activeClassName="d-none">sign up</NavLink>
            {props.location.pathname !== SIGNUP_ROUTE() && <br/>}

            <NavLink to={LOGIN_ROUTE()} className="text-light" activeClassName="d-none">login</NavLink>

        </div>
    )
}

export const UserActions = withRouter(UserActionsWithRouter);