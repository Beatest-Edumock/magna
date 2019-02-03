import React from 'react';
import {SignUpForm} from "./SignUpForm";
import {getCollegeApi} from "../../_Api/Colleges";
import {signupAPI} from "../../_Api/User";
import {toast} from 'react-toastify';


class SignUpFormContainer extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaInstanceCallback = this.registerRecaptchaInstanceCallback.bind(this);
        this.captchaVerifiedCallback = this.captchaVerifiedCallback.bind(this);
        this.performSignup = this.performSignup.bind(this);
        this.values = null;


        this.state = {colleges: []};
    }

    registerRecaptchaInstanceCallback(e) {
        this.recaptchaInstance = e;

    }

    /**
     * Function that is called when recaptcha actually succeeds.
     *
     * This may be instant for a normal user, or after filling out the checkboxes
     * for a suspicious user.
     *
     * After the verification, this function finally calls the signup method to actually
     * perform the api request to Beatest.
     *
     * @param response recaptcha response (should be sent to beatest server as is)
     */
    captchaVerifiedCallback(response) {


        this.response = response;
        this.performSignup();
    }

    componentDidMount() {

        getCollegeApi().then(({data}) => {
            const colleges = this.state.colleges;

            colleges.push(...data);
            colleges.push({id: null, college_name: "My college is not listed"});

            this.setState({colleges: colleges});
        })

    }

    /**
     * Handle the button press and fire off the recaptcha execution.
     * The values , along with the callback functions are stored
     * in the component so that they can be accessed when recaptcha is verified(see captchaVerifiedCallback).
     *
     * @param values all the form key/values
     * @param setSubmitting function to enable/disable submit button
     * @param setErrors function to set arbitrary errors
     * @param resetForm function to reset the form.
     */
    onSubmitCallback(values, {setSubmitting, setErrors, resetForm}) {


        setSubmitting(true);

        /**
         * storing the parameters of formik so that it can be accessed later on (when captcha succeeds)
         */
        this.values = values;
        this.setSubmitting = setSubmitting;
        this.setErrors = setErrors;
        this.resetForm = resetForm;
        console.log(setErrors);

        this.recaptchaInstance.execute();
    }

    performSignup() {

        const {fullName, email, phoneNo, password, college} = this.values;


        signupAPI(fullName,
            email,
            password,
            phoneNo,
            college.value,
            this.response
        ).then(() => {
            this.setErrors({info: "A verification email has been sent, please check your email"});

        }).catch((error) => {

            this.resetForm();
            this.setErrors({info: error.response.data.message});
            this.recaptchaInstance.reset();

        });


    }


    render() {

        return (<SignUpForm colleges={this.state.colleges}
                            referral_code_used={this.props.referralCode}
                            onSubmitCallback={this.onSubmitCallback}
                            registerRecaptchaInstanceCallback={this.registerRecaptchaInstanceCallback}
                            captchaVerifiedCallback={this.captchaVerifiedCallback}/>);
    }

}


export {SignUpFormContainer};