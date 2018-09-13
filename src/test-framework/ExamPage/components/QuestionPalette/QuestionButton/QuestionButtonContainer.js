import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";

class QuestionButtonContainer extends Component{

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this)

    }

    questionButtonClickHandler() {
        console.log("BLEH")
    }

    render() {
        return(
            <QuestionButtonUI id = {this.props.id} questionFunc = {this.questionClickHandler}/>
        )
    }

}

export {QuestionButtonContainer}