import React from 'react';
import {connect} from 'react-redux';
import {setCurrentQuestionChoiceIDAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";
import {ClearResponseButtonUI} from "./ClearResponseButtonUI";


function ClearResponseButton(props) {

    return (
        <ClearResponseButtonUI hasAnswered={props.hasAnswered} onClickHandler={() => props.clearResponse()}/>
    )

}


function mapStateToProps(state, props) {

    const currentQuestionDetails = state.test.questionsByID[state.test.currentQuestion];

    const hasAnswered = currentQuestionDetails.choice_id !== null | currentQuestionDetails.tita_choice !== null;

    return {
        hasAnswered

    }

}

function mapDispatchToProps(dispatch) {

    return {
        clearResponse: () => {
            dispatch(setCurrentQuestionChoiceIDAsyncAC(null));
        }
    }
}

export const ClearResponseButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ClearResponseButton);
