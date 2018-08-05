import React from 'react'
import {ResendActivationContainer} from "./ResendActivationForm/ResendActivationContainer";
import {SingleFormPage} from "../Common/SingleFormPage";

function ResendActivationPage(props) {

    return (
        <SingleFormPage title="Resend Activation Email">
            <ResendActivationContainer/>
        </SingleFormPage>

    );

}

export {ResendActivationPage};