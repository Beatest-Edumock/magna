/**
 *
 * A Container for 'important' forms like signup,login etc.
 *
 * It just provides a nice dark background with a logo only
 * navbar.
 *
 *
 * Usage:
 *
 * <SingleFormPage>
 *
 *     <SomeForm/>
 *
 * </SingFormPage>
 */


import React from 'react'
import {NavBar} from "../Layout/NavBar/NavBar";
import {UserActions} from "./UserActions";


const formContainerStyle = {
    marginTop: "10vh"
};

const fullPageDivStyle = {
    width: "100%",
    minHeight: "100%",
    position: "absolute",
    // backgroundImage: ""

};


function SingleFormPage(props) {

    return (

        <div style={fullPageDivStyle} className="bg-gray-dark">

            <div className="container-fluid">
                <div>

                    <NavBar transparent lightLogo/>

                </div>

                <div style={formContainerStyle} className="container text-center col-md-4 col-md-offset-4">
                    <h6 className='text-light text-left'>{props.title}</h6>
                    <hr className="bg-light"/>
                    {props.children}
                    <UserActions/>
                </div>
            </div>
        </div>

    )

}

export {SingleFormPage};
