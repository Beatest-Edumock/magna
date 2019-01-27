import React from 'react';
import {connect} from 'react-redux';
import {
    setCurrentQuestionChoiceIDAsyncAC,
    setCurrentQuestionTITAAnswerAsyncAC,
    setCodingQuestionAsyncAC
} from "../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";
import {ClearResponseButtonUI} from "./ClearResponseButtonUI";


function ClearResponseButton(props) {

    return (
        <ClearResponseButtonUI hasAnswered={props.hasAnswered} onClickHandler={() => props.clearResponse()}/>
    )

}


function mapStateToProps(state, props) {

    const currentQuestionDetails = state.test.questionsByID[state.test.currentQuestion];

    const hasAnswered = currentQuestionDetails.choice_id !== null | currentQuestionDetails.tita_choice !== null | currentQuestionDetails.chosen_language_id !== null;

    return {
        hasAnswered

    }

}

function mapDispatchToProps(dispatch) {
    //TODO: below should be one atomic call to reset the answer for the question for any type
    return {
        clearResponse: () => {
            dispatch(setCurrentQuestionChoiceIDAsyncAC(null));
            dispatch(setCurrentQuestionTITAAnswerAsyncAC(null));
            dispatch(setCodingQuestionAsyncAC(null, null));
        }
    }
}

export const ClearResponseButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ClearResponseButton);
