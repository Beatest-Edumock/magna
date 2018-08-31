import React from 'react';
import {ContactUsApi} from "../../_Api/ContactUs";
import {toast} from 'react-toastify';
import {ContactUsForm} from "./ContactUsForm";


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



