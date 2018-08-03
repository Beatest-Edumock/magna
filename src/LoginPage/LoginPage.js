import React from 'react'
import {NavBar} from "../Layout/NavBar/NavBar";
import {Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap';
import {LoginFormContainer} from "./LoginForm/LoginFormContainer";


const formContainerStyle = {
    marginTop: "10%"
};

const fullPageDivStyle = {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ),url(/img/inner-2.jpg)"

};


function LoginPage() {

    return (

        <div style={fullPageDivStyle}>

            <div className="container-fluid">
                <div>

                    <NavBar useLightLogo/>

                </div>

                <div style={formContainerStyle} className="container text-center col-md-4 col-md-offset-4">
                    <h4 className='text-light'>Sign In</h4>
                    <hr className="bg-light"/>

                    <LoginFormContainer/>

                </div>
            </div>
        </div>

    )

}

export {LoginPage};