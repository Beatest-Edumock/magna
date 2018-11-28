import React from 'react'
import {SingleFormPage} from "../Common/SingleFormPage";
import {ForgotPasswordContainer} from "./ResendActivationForm/ForgotPasswordContainer";

function ForgotPassword(props) {

    return (
        <SingleFormPage title="Forgot Password">
            <ForgotPasswordContainer/>
        </SingleFormPage>

    );

}

export {ForgotPassword};