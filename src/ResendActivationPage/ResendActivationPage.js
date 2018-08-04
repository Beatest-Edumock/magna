import React from 'react'
import ResendActivationForm from './ResendActivationForm/ResendActivationForm'
import {SingleFormPage} from "../Common/SingleFormPage";

function ResendActivationPage(props) {

    return (
        <SingleFormPage title="Resend Activation Email">
            <ResendActivationForm/>
        </SingleFormPage>

    );

}

export default ResendActivationPage;