import React from 'react';
import {connect} from 'react-redux';
import {addUserAC} from '_Redux/ActionCreators/User-ActionCreator'
import {LoginForm} from './LoginForm'


function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

    return {
        addUserAction: (userDetails) => {
            dispatch(addUserAC(userDetails))
        }
    }

}


const LoginFormContainer = connect(null, mapDispatchToProps)(LoginForm);

export {LoginFormContainer};