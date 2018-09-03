import React from 'react';
import {connect} from 'react-redux';
import {addUserAC} from '_Redux/ActionCreators/User-ActionCreator'
import {LoginForm} from './LoginForm'
import {LoginUserApi} from "../../_Api/User";
import {toast} from 'react-toastify';
import {history} from "../../__internals/CustomHistory";


class LoginFormContainer extends React.Component {

    constructor() {
        super();
        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }


    onSubmitCallback(values, {setSubmitting, setErrors}) {

        LoginUserApi(values.email, values.password).then(({data}) => {

            this.props.addUserAction(data);
            toast.success(`Welcome ${data.full_name}`);
            history.push("/");

        }).catch(({response}) => {
            setErrors({info: response.data.message});
        }).then(() => {
            setSubmitting(false);
        });

    }

    render() {
        return (<LoginForm onSubmitCallback={this.onSubmitCallback}/>);
    }

}



function mapDispatchToProps(dispatch) {

    return {
        addUserAction: (userDetails) => {
            dispatch(addUserAC(userDetails))
        }
    }

}


LoginFormContainer = connect(null, mapDispatchToProps)(LoginFormContainer);

export {LoginFormContainer};