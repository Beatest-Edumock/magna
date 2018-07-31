import React from "react";
import PropTypes from 'prop-types';

import history from '__internals/CustomHistory'
import {LogoutUser} from '_Api/User'
import {toast} from 'react-toastify'

function LoginProfileSignupButton(props) {
    /**
     * The text and links of the two buttons
     * depends on the fact that the user is logged in or not.
     *
     * @type {string}
     */

    const profileLoginText = props.isLoggedIn ? "Profile" : "Login";
    const profileLoginLink = props.isLoggedIn ? "/profile" : "/login";

    const signupLogoutText = props.isLoggedIn ? "Logout" : "Sign Up";

    return (

        <div className="bar__module">

            <a className="btn btn--sm btn--primary type--uppercase" onClick={() => {
                history.push(profileLoginLink)
            }}>
                <span className="btn__text"> {profileLoginText}</span>
            </a>

            <a className="btn btn--sm type--uppercase" onClick={() => {

                if (props.isLoggedIn) {
                    LogoutUser().then(() => {
                        toast.success("Successfully Logged Out");
                        props.removeUserAction();
                    });
                }

            }}> <span
                className="btn__text"> {signupLogoutText} </span>
            </a>
        </div>
    )
}

function NavBar(props) {

    return (
        <div className="nav-container">
            <div>
                <div className="bar bar--sm visible-xs">
                    <div className="container">
                        <div className="row">

                            <div className="col-3 col-md-2">
                                <a href="index.html"> <img className="logo logo-dark" alt="logo" src="/logos/beatest.png"/>
                                </a>
                            </div>
                            <div className="col-9 col-md-10 text-right">
                                <a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                    <i className="icon icon--sm stack-interface stack-menu"/> </a>
                            </div>
                        </div>
                    </div>
                </div>


                <nav id="menu1" className="bar bar-1 hidden-xs bar--absolute bar--transparent">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-2 hidden-xs">
                                <div className="bar__module"><a href="index.html">
                                    <img className="logo logo-dark" alt="logo" src="/logos/beatest-dark.png"/> <img
                                    className="logo logo-light" alt="logo" src="/logos/beatest.png"/> </a>
                                </div>
                            </div>


                            <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal text-left">
                                        <li>
                                            <a href="#"> Testing <span className="label label--inline "> Deal </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                {LoginProfileSignupButton(props)}


                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}

NavBar.propTypes = {
    isLoggedIn: PropTypes.object,
    removeUserAction: PropTypes.func.isRequired

};

export default NavBar;
