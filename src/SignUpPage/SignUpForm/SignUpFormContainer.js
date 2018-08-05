import React from 'react';
import {SignUpForm} from "./SignUpForm";
import {GetCollegeApi} from "../../_Api/Colleges";


class SignUpFormContainer extends React.Component {

    constructor() {
        super();

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaCallback = this.registerRecaptchaCallback.bind(this);

        this.state = {colleges: new Array()};
    }

    registerRecaptchaCallback(e) {
        this.recaptchaInstance = e;

    }

    componentDidMount() {

        GetCollegeApi().then(({data}) => {
            const colleges = this.state.colleges;

            colleges.push(...data);

            this.setState({colleges: colleges});
        })

    }

    onSubmitCallback(values, {setSubmitting, setErrors}) {
        //todo perform api request for submit

    }


    render() {
        return (<SignUpForm colleges={this.state.colleges}
                            onSubmitCallback={this.onSubmitCallback}
                            registerRecaptchaCallback={this.registerRecaptchaCallback}/>);
    }

}


export {SignUpFormContainer};