import React from 'react';
import {forgotPasswordAPI, resendActivationMailApi, resetPasswordAPI} from "../../_Api/User";
import {toast} from 'react-toastify';
import {history} from "../../__internals/CustomHistory";
import {ResetPasswordForm} from "./ResetPasswordForm";
import {withRouter} from 'react-router-dom';
import qs from 'query-string';
import {LOGIN_ROUTE} from "../../route";



class ResetPasswordContainerWithRouter extends React.Component {

    constructor() {
        super();

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaInstanceCallback = this.registerRecaptchaInstanceCallback.bind(this);
    }

    registerRecaptchaInstanceCallback(recaptchaInstance) {

        this.recaptchaInstance = recaptchaInstance;
    }

    onSubmitCallback(values, {setSubmitting, setErrors}) {

        const token = qs.parse(this.props.location.search, {ignoreQueryPrefix: true}).token;




        resetPasswordAPI(token,values.password).then(() => {

            toast.success("Password Successfully Reset");
            history.push(LOGIN_ROUTE());

        }).catch(({response}) => {

            setErrors({info: response.data.message});
            setSubmitting(false);

        });


    }

    render() {

        return (
            <ResetPasswordForm onSubmitCallback={this.onSubmitCallback}
                               registerRecaptchaInstanceCallback={this.registerRecaptchaInstanceCallback}
            />
        )

    }
}


export const ResetPasswordContainer = withRouter(ResetPasswordContainerWithRouter);



