import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";
import {changeQuestionCurrentAC} from "../../../../../_Redux/ActionCreators/Test/Questions-ActionCreator";
import {connect} from 'react-redux';


class QuestionButton extends Component{

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this)

    }

    questionButtonClickHandler() {
        // id is the question current index in the section
        this.props.changeCurrentQuestion(this.props.questionID, this.props.id);
    }


    render() {
        return(
            <QuestionButtonUI id = {this.props.id} questionCallback = {this.questionClickHandler}/>
        )
    }



}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentQuestion: (questionID, questionIndex) => {

            dispatch(changeQuestionCurrentAC(questionID, questionIndex));

        }
    }
}

const QuestionButtonContainer = connect(null, mapDispatchToProps)(QuestionButton);

export {QuestionButtonContainer}