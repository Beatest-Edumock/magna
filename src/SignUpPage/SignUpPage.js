import React from 'react';
import {SingleFormPage} from "../Common/SingleFormPage";
import {SignUpFormContainer} from "./SignUpForm/SignUpFormContainer";

/**
 * SignUpPage component get Referral Code from the URL and
 * pass it on to the container.
 */
class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {referralCode} = this.props.match.params;

    return (
        <SingleFormPage title="Register at Beatest!">
            <div style={{paddingBottom:'10px'}}>
                <SignUpFormContainer referralCode={referralCode}/>
            </div>
        </SingleFormPage>


    )
    }
}

export {SignUpPage};
