import React from 'react';
import {connect} from 'react-redux';
import {LogicUI} from "./LogicUI";


function Logic(props) {

    if (props.isTestComplete) {
        return (
            <LogicUI logic={props.logic}/>
        )

    }

    else {
        return <div/>
    }
}


function mapStateToProps(state) {

    return {
        isTestComplete: state.test.is_complete,
        logic: state.test.questionsByID[state.test.currentQuestion].logic
    }

}


export const LogicContainer = connect(mapStateToProps, null)(Logic);