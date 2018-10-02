import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect"
import {QuestionStateButtonUI} from "./QuestionStateButtonUI";
import {
    setCurrentQuestionChoiceIDAsyncAC,
    setCurrentQuestionToReviewAsyncAC,
    setCurrentQuestionToSeenAsyncAC
} from "../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";

class QuestionStateButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this);

    }


    // ** Cases **
    // CA: Clear All
    // MR: Mark For Review
    // RR: Remove Review
    questionButtonClickHandler() {
    }


    render() {
        return <QuestionStateButtonUI
            questionCallBack={this.questionClickHandler}
            type={this.state.type}/>
    }


}

function mapStateToProps(state, ownProps) {

    const currentQuestion = state.test.questionsByID[state.test.currentQuestion];

    return {
        marked: currentQuestion.attempt_status === "marked",
        attempted: currentQuestion.choice_id !== null || currentQuestion.tita_choice !== null

    }
}


function mapDispatchToProps(dispatch) {

    return {
        clearQuestionChoice: () => {
            dispatch(setCurrentQuestionChoiceIDAsyncAC(null));
        }, markForReview: () => {
            dispatch(setCurrentQuestionToReviewAsyncAC());
        }, removeMarkForReview: () => {
            dispatch(setCurrentQuestionToSeenAsyncAC());
        }
    }

}

const QuestionStateButton = connect(null, mapDispatchToProps)(QuestionStateButtonContainer);

export {QuestionStateButton}