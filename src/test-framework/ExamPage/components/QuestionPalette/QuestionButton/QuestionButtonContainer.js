import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";
import {changeCurrentQuestion} from "../../../../../_Redux/ActionCreators/Test/Questions-ActionCreator";
import {connect} from 'react-redux';


class QuestionButton extends Component{

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this)

    }

    questionButtonClickHandler() {
        this.props.changeCurrentQuestion(this.props.questionID);
    }


    render() {
        return(
            <QuestionButtonUI id = {this.props.id} questionCallback = {this.questionClickHandler}/>
        )
    }



}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentQuestion: (questionID) => {

            dispatch(changeCurrentQuestion(questionID));

        }
    }
}

const QuestionButtonContainer = connect(null, mapDispatchToProps)(QuestionButton);

export {QuestionButtonContainer}