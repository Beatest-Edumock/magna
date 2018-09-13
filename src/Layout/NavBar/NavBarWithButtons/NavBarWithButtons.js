import React from 'react';
import {NavItem, NavLink, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LogoutUserApi} from "../../../_Api/User";
import {history} from "../../../__internals/CustomHistory";
import {toast} from 'react-toastify'
import {NavBar} from "../NavBar";


function profileLoginNavLink(props) {


    return (

        <NavLink tag={Link} to={props.isUserLoggedIn ? "/profile" : "/login"}>

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

            LogoutUserApi().then(() => {
                    props.removeUserAction();
                    toast.success("Successfully Logged Out");
                }
            )
        }
    }

    else {
        buttonHandler = () => {
            history.push('/signup')
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