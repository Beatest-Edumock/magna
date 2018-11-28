import React from 'react';
import {forgotPasswordAPI, resendActivationMailApi} from "../../_Api/User";
import {toast} from 'react-toastify';
import {history} from "../../__internals/CustomHistory";
import {ForgotPasswordForm} from "./ForgotPasswordForm";


class ForgotPasswordContainer extends React.Component {

    constructor() {
        super();

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaInstanceCallback = this.registerRecaptchaInstanceCallback.bind(this);
    }

    registerRecaptchaInstanceCallback(recaptchaInstance) {

        this.recaptchaInstance = recaptchaInstance;
    }

    onSubmitCallback(values, {setSubmitting, setErrors}) {


        forgotPasswordAPI(values.email, values.recaptcha).then(() => {

            toast.success("Email Successfully sent. Please check your inbox");

        }).catch(({response}) => {

            setErrors({info: response.data.message});
            setSubmitting(false);
            this.recaptchaInstance.reset();

        });


    }

    render() {

        return (
            <ForgotPasswordForm onSubmitCallback={this.onSubmitCallback}
                                registerRecaptchaInstanceCallback={this.registerRecaptchaInstanceCallback}
            />
        )

    }
}

export {ForgotPasswordContainer};



