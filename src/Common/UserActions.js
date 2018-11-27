import React from 'react';
import {NavLink} from 'react-router-dom'
import {LOGIN_ROUTE, RESEND_ACTIVATION_ROUTE, SIGNUP_ROUTE} from "../route";

import {withRouter} from "react-router";

// forgot password, resend activation, signup , login
function UserActionsWithRouter(props) {

    let textColor = props.textColor || "text-light";

    return (
        <div>
            <NavLink to="/forgot-pass" className={ textColor } activeClassName="d-none text-danger">Forgot Password? Reset Now</NavLink>
            {props.location.pathname !== "/forgot-pass" && <br/>}

            <NavLink to={RESEND_ACTIVATION_ROUTE()} className={textColor} activeClassName="d-none text-danger">Recover your Account? Resend Activation Email</NavLink>
            {props.location.pathname !== RESEND_ACTIVATION_ROUTE() && <br/>}

            <NavLink to={SIGNUP_ROUTE()} className={textColor} activeClassName="d-none">Don't have an Account yet? Create Account</NavLink>
            {props.location.pathname !== SIGNUP_ROUTE() && <br/>}

            <NavLink to={LOGIN_ROUTE()} className={ textColor } activeClassName="d-none">Already have an account? Login</NavLink>

        </div>
    )
}

export const UserActions = withRouter(UserActionsWithRouter);