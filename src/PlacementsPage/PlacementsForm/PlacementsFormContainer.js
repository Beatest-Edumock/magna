import React from 'react';
import {connect} from 'react-redux';
import {addUserAC} from '_Redux/ActionCreators/User-ActionCreator'
import {PlacementsForm} from './PlacementsForm'
import {loginUserApi} from "../../_Api/User";
import {toast} from 'react-toastify';
import {history} from "../../__internals/CustomHistory";

class LoginFormContainer extends React.Component {

    constructor() {
        super();
        this.onSubmitCallback = this.onSubmitCallback.bind(this);
    }


    onSubmitCallback(values, {setSubmitting, setErrors}) {

    }

    render() {
        return (<PlacementsForm onSubmitCallback={this.onSubmitCallback} shouldAutoDirect={this.props.shouldAutoDirect}/>);
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


const PlacementsFormContainer = connect(null, mapDispatchToProps)(LoginFormContainer);

export {PlacementsFormContainer};