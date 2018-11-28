import React from 'react'
import {SingleFormPage} from "../Common/SingleFormPage";
import {ResetPasswordContainer} from "./ResendActivationForm/ResetPasswordContainer";

function ResetPassword(props) {

    return (
        <SingleFormPage title="Reset Password">
            <ResetPasswordContainer/>
        </SingleFormPage>

    );

}

export {ResetPassword};