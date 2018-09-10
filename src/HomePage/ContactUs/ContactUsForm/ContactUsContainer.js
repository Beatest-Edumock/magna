import React from 'react';
import {ContactUsApi} from "../../_Api/Misc";
import {toast} from 'react-toastify';
import {ContactUsForm} from "./ContactUsForm";

/**
 * This component contains the functions that need to be executed when submitting the contactus form
 */

class ContactUsContainer extends React.Component {

    constructor() {
        super();

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaInstanceCallback = this.registerRecaptchaInstanceCallback.bind(this);
    }

    registerRecaptchaInstanceCallback(recaptchaInstance) {
        console.log("registered");
        this.recaptchaInstance = recaptchaInstance;
    }

    onSubmitCallback(values, {setSubmitting, setErrors}) {


        ContactUsApi(values.name, values.email, values.message, values.recaptcha).then(() => {

            toast.success("Your Message was Successfully Sent!");

        }).catch(({response}) => {

            setErrors({info: response.data.message});
            setSubmitting(false);
            this.recaptchaInstance.reset();

        });


    }

    render() {

        return (
            <ContactUsForm onSubmitCallback={this.onSubmitCallback}
                                  registerRecaptchaInstanceCallback={this.registerRecaptchaInstanceCallback}
            />
        )

    }
}

export {ContactUsContainer};



