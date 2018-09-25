import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect"
import {QuestionStateButtonUI} from "./QuestionStateButtonUI";
import {
    setCurrentQuestionChoiceIDAsyncAC,
    setCurrentQuestionToReviewAsyncAC, setCurrentQuestionToSeenAsyncAC,
    updateQuestionAttemptAsyncAC
} from "../../../../_Redux/ActionCreators/Test/QuestionAttempt-ActionCreator";

class QuestionStateButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this);
        this.state = {
            type: this.props.type
        }

    }


    // ** Cases **
    // CA: Clear All
    // MR: Mark For Review
    // RR: Remove Review
    questionButtonClickHandler() {
        switch (this.state.type) {
            case "CA":
                this.props.clearQuestionChoice();
                break;
            case "MR":
                this.props.markForReview();
                this.setState({type: "RR"})
                break;
            case "RR":
                this.props.removeMarkForReview()
                this.setState({type: "MR"})


        }
    }


    render() {
        return <QuestionStateButtonUI questionCallBack={this.questionClickHandler} type={this.state.type}/>
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