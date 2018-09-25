import React, {Component} from 'react';
import {MCQUI} from "./MCQUI";
import {connect} from 'react-redux';
import {setCurrentQuestionChoiceIDAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/QuestionAttempt-ActionCreator";

class MCQContainer extends Component {


    constructor(props) {
        super(props);
        this.mcqChoiceSubmit = this.mcqChoiceSubmitCallback.bind(this);


    }


    mcqChoiceSubmitCallback(choiceID) {
        this.props.updateQuestionAttempt(choiceID);
        console.log(this.props.chosenID);
    }


    render() {
        return (
            <MCQUI choices={this.props.question.choices}
                   mcqCallback={this.mcqChoiceSubmit}
                   questionHtml={this.props.question.html}
                   currentChoice={this.props.question.choice_id}/>
        )
    }


}

function mapDispatchToProps(dispatch) {
    return {
        updateQuestionAttempt: (choiceId) => {
            dispatch(setCurrentQuestionChoiceIDAsyncAC(choiceId));
        }
    }

}


const MCQ = connect(null, mapDispatchToProps)(MCQContainer);
export {MCQ}