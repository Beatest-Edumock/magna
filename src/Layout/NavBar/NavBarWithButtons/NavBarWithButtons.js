import React from 'react';
import {NavItem, NavLink, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {logoutUserApi} from "../../../_Api/User";
import {history} from "../../../__internals/CustomHistory";
import {toast} from 'react-toastify'
import {NavBar} from "../NavBar";
import {LOGIN_ROUTE, SIGNUP_ROUTE} from "../../../route";


function profileLoginNavLink(props) {


    return (

        <NavLink tag={Link} to={props.isUserLoggedIn ? "NOTIMPLEMENTED" : LOGIN_ROUTE()}>

            <Button color="primary" className="btn-sm btn-outline-success btn-block">
                {props.isUserLoggedIn ? "Profile" : "Login"}
            </Button>

        </NavLink>
    )

}

function signupLogoutNavLink(props) {

    let buttonHandler;

    if (props.isUserLoggedIn) {
        buttonHandler = () => {

            logoutUserApi().then(() => {
                    props.removeUserAction();
                    toast.success("Successfully Logged Out");
                }
            )
        }
    }

    else {
        buttonHandler = () => {
            history.push(SIGNUP_ROUTE())
        }
    }


    return (

        <NavLink>
            <Button color="success" onClick={buttonHandler} className="btn-sm btn-outline-primary btn-">
                {props.isUserLoggedIn ? "Logout" : "Signup"}
            </Button>

        </NavLink>
    );

}

/**
 * Navbar with all buttons.
 */
function NavBarWithButtons(props) {

    return (
        <NavBar {...props}>


            <NavItem>
                {profileLoginNavLink(props)}
            </NavItem>

            <NavItem>
                {signupLogoutNavLink(props)}
            </NavItem>
        </NavBar>)

}


export {NavBarWithButtons}