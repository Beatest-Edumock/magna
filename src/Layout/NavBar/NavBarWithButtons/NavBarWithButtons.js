import React from 'react';
import {Button, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {logoutUserApi} from "../../../_Api/User";
import {history} from "../../../__internals/CustomHistory";
import {toast} from 'react-toastify'
import {NavBar} from "../NavBar";
import {LOGIN_ROUTE, PLACEMENTS_PAGE_ROUTE, SIGNUP_ROUTE} from "../../../route";


function profileLoginNavLink(props) {


    return (

        <NavLink tag={Link} to={props.isUserLoggedIn ? PLACEMENTS_PAGE_ROUTE() : PLACEMENTS_PAGE_ROUTE()}>

            <button  className="btn-sm btn-outline-success ">
                {props.isUserLoggedIn ? "Placements" : "Placements"}
            </button>

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
            <button  onClick={buttonHandler} className="btn-sm btn-outline-primary ">
                {props.isUserLoggedIn ? "Logout" : "Signup"}
            </button>

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