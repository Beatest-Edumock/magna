import React from 'react';
import {connect} from 'react-redux';
import {setCurrentQuestionToReviewAsyncAC, setCurrentQuestionToSeenAsyncAC} from "../../../../../_Redux/ActionCreators/Test/QuestionAttempt-ActionCreator";
import {MarkForReviewButtonUI} from "./MarkForReviewButtonUI";


class MarkForReviewButton extends React.Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler() {

        if (this.props.markedForReview) {
            this.props.clearReview();
        }

        else {
            this.props.markForReview();
        }

    }

    render() {
        return (
            <MarkForReviewButtonUI marked={this.props.markedForReview} onClickHandler={this.clickHandler}/>
        )
    }

}


function mapStateToProps(state, props) {

    const currentQuestionDetails = state.test.questionsByID[state.test.currentQuestion];


    return {
        markedForReview: currentQuestionDetails.attempt_status === "review"
    }

}

function mapDispatchToProps(dispatch) {

    return {
        clearReview: () => {
            dispatch(setCurrentQuestionToSeenAsyncAC());
        },

        markForReview: () => {
            dispatch(setCurrentQuestionToReviewAsyncAC());
        }
    }
}

export const MarkeForReviewButtonContainer = connect(mapStateToProps, mapDispatchToProps)(MarkForReviewButton);
