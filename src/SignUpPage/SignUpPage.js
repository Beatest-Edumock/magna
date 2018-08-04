import React from 'react';
import {SingleFormPage} from "../Common/SingleFormPage";
import {SignUpForm} from "./SignUpForm/SignUpForm";


function SignUpPage() {

    return (
        <SingleFormPage title="Register at Beatest!">
            <SignUpForm/>
        </SingleFormPage>


    )
}


export {SignUpPage};