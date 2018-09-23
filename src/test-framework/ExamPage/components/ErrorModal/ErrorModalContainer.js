import React from "react";
import {ErrorModalUI} from "./ErrorModalUI";
import {connect} from 'react-redux';


function ErrorModal(props) {

    return (<ErrorModalUI  {...props} />)
}


function mapStateToProps(state, ownProps) {

    if (state.test.error == null) {
        return {
            shouldShow: false
        }
    }

    return {
        shouldShow: true,
        text: state.test.error.text,
        isFatal: state.test.error.isFatal
    };

}


export const ErrorModalContainer = connect(mapStateToProps)(ErrorModal);

