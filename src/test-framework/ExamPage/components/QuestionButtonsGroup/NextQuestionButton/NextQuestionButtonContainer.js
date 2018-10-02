import React from 'react';
import {connect} from 'react-redux';
import {NextQuestionButtonUI} from "./NextQuestionButtonUI";
import {moveToNextQuestionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Questions/Questions-ActionCreator";


class NextQuestionButton extends React.Component {

    constructor(props) {
        super(props);

        this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler() {
        this.props.moveToNextQuestion();
    }

    render() {
        return (
            <NextQuestionButtonUI onClickHandler={this.clickHandler}/>
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
        moveToNextQuestion: () => {
            dispatch(moveToNextQuestionAsyncAC());
        },

    }
}

export const NextQuestionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(NextQuestionButton);
