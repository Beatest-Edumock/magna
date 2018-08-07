import React from 'react';
import {SignUpForm} from "./SignUpForm";
import {GetCollegeApi} from "../../_Api/Colleges";


class SignUpFormContainer extends React.Component {

    constructor() {
        super();

        this.onSubmitCallback = this.onSubmitCallback.bind(this);
        this.registerRecaptchaInstanceCallback = this.registerRecaptchaInstanceCallback.bind(this);

        this.state = {colleges: new Array()};
    }

    registerRecaptchaInstanceCallback(e) {
        this.recaptchaInstance = e;

    }

    componentDidMount() {

        GetCollegeApi().then(({data}) => {
            const colleges = this.state.colleges;

            colleges.push(...data);
            colleges.push({id: null, college_name: "My college is not listed"});


            this.setState({colleges: colleges});
        })

    }

    onSubmitCallback(values, {setSubmitting, setErrors}) {
        //todo perform api request for submit

        console.log(values);

    }


    render() {
        return (<SignUpForm colleges={this.state.colleges}
                            onSubmitCallback={this.onSubmitCallback}
                            registerRecaptchaInstanceCallback={this.registerRecaptchaInstanceCallback}/>);
    }

}


export {SignUpFormContainer};