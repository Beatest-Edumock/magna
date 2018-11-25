import React from 'react';
import {SingleFormPage} from "../Common/SingleFormPage";
import {SignUpFormContainer} from "./SignUpForm/SignUpFormContainer";

/**
 *
 * @returns {*}
 * @constructor
 */
function SignUpPage() {

    return (
        <SingleFormPage title="Register at Beatest!">
            <div style={{paddingBottom:'10px'}}>
                <SignUpFormContainer/>
            </div>
        </SingleFormPage>


    )
}


export {SignUpPage};