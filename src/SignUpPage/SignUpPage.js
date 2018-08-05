import React from 'react';
import {SingleFormPage} from "../Common/SingleFormPage";
import {SignUpFormContainer} from "./SignUpForm/SignUpFormContainer";


function SignUpPage() {

    return (
        <SingleFormPage title="Register at Beatest!">
            <SignUpFormContainer/>
        </SingleFormPage>


    )
}


export {SignUpPage};