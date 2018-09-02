import React from 'react'
import {LoginFormContainer} from "./LoginForm/LoginFormContainer";
import {SingleFormPage} from "../Common/SingleFormPage";


function LoginPage() {

    return (

        <SingleFormPage title="Log In">
            <LoginFormContainer/>

        </SingleFormPage>

    )

}

export {LoginPage};