import React from 'react';
import {connect} from 'react-redux';
import {addUserAC} from '_Redux/ActionCreators/User-ActionCreator'
import {LoginForm} from './LoginForm'
import {loginUserApi} from "../../_Api/User";
import {toast} from 'react-toastify';
import {history} from "../../__internals/CustomHistory";

class LoginFormContainer extends React.Component {

    constructor() {
        super();
        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }


    onSubmitCallback(values, {setSubmitting, setErrors}) {

        loginUserApi(values.email, values.password).then(({data}) => {

            this.props.addUserAction(data);
            if (this.props.shouldAutoDirect !== false) {
                history.push("/");
            }

            toast.success(`Welcome ${data.full_name}`);

        }).catch(({response}) => {
            setErrors({info: response.data.message});
        }).then(() => {
            setSubmitting(false);
        });

    }

    render() {
        return (<LoginForm onSubmitCallback={this.onSubmitCallback} shouldAutoDirect={this.props.shouldAutoDirect}/>);
    }

}

function mapStateToProps(state, ownProps) {


    return {
        isUserLoggedIn: state.user,
        ...ownProps
    }

}


function mapDispatchToProps(dispatch) {

    return {
        addUserAction: (userDetails) => {
            dispatch(addUserAC(userDetails))
        }
    }

}


LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);

export {LoginFormContainer};