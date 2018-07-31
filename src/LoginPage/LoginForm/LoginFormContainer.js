import React from 'react';
import {connect} from 'react-redux';
import {add_user_action} from '_Redux/ActionCreators/User/User-ActionCreator'
import LoginForm from './LoginForm'


function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

    return {
        addUserAction: (userDetails) => {
            dispatch(add_user_action(userDetails))
        }
    }

}


export default connect(null, mapDispatchToProps)(LoginForm);