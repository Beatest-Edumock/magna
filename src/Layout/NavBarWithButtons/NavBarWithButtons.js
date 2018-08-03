import React from 'react';
import {NavBar} from "../NavBar/NavBar";
import {NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {LogoutUserApi} from "../../_Api/User";
import {history} from "../../__internals/CustomHistory";
import {toast} from 'react-toastify'


function profileLoginNavLink(props) {


    return (

        <NavLink tag={Link} to={props.isUserLoggedIn ? "/profile" : "/login"}>

            <button className="btn btn-primary">
                {props.isUserLoggedIn ? "Profile" : "Login"}
            </button>

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
            history.push('/login')
        }
    }


    return (

        <NavLink>

            <button className="btn btn-outline-secondary" onClick={buttonHandler}>
                {props.isUserLoggedIn ? "Logout" : "Signup"}
            </button>

        </NavLink>
    );

}

function NavBarWithButtons(props) {


    return (
        <NavBar>

            <NavItem>
                {profileLoginNavLink(props)}
            </NavItem>

            <NavItem>
                {signupLogoutNavLink(props)}
            </NavItem>
        </NavBar>)

}


export {NavBarWithButtons}