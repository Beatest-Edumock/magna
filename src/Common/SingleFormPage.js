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
 * </SingFormPage
 */


import React from 'react'
import {NavBar} from "../Layout/NavBar/NavBar";


const formContainerStyle = {
    marginTop: "10vh"
};

const fullPageDivStyle = {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5) ),url(/img/inner-2.jpg)"

};


function SingleFormPage(props) {

    return (

        <div style={fullPageDivStyle}>

            <div className="container-fluid">
                <div>

                    <NavBar lightLogo/>

                </div>

                <div style={formContainerStyle} className="container text-center col-md-4 col-md-offset-4">
                    <h6 className='text-light text-left'>{props.title}</h6>
                    <hr className="bg-light"/>
                    {props.children}
                </div>
            </div>
        </div>

    )

}

export {SingleFormPage};
