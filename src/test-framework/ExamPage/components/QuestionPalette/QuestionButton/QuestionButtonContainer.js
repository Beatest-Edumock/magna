import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";
import {changeQuestionCurrentAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Questions-ActionCreator";
import {connect} from 'react-redux';


class QuestionButton extends Component {

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this)

    }

    questionButtonClickHandler() {
        // id is the question current index in the section
        this.props.changeCurrentQuestion(this.props.questionID);
    }


    render() {

        return (
            <QuestionButtonUI id={this.props.id} questionCallback={this.questionClickHandler} isCurrent={this.props.questionID === this.props.currentQuestion}/>
        )
    }


}

function mapStateToProps(state, ownProps) {

    return {
        currentQuestion: state.test.currentQuestion,
        ...ownProps

    }

}

function mapDispatchToProps(dispatch) {

    return {
        changeCurrentQuestion: (questionID) => {

            dispatch(changeQuestionCurrentAsyncAC(questionID));

        }
    }
}

const QuestionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionButton);

export {QuestionButtonContainer}