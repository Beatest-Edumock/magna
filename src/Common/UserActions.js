import React from 'react';
import {NavLink} from 'react-router-dom'
// forgot password, resend activation, signup , login
function UserActions(props) {
    return (
        <div>
            <NavLink to="/" activeClassName="">forgot password</NavLink>
            <br />
            <NavLink to="/" activeClassName="">resend activation</NavLink>
            <br />
            <NavLink to="/" activeClassName="">sign up</NavLink>
            <br />
            <NavLink to="/" activeClassName="d-none">login</NavLink>

        </div>
    )
}
export {UserActions}