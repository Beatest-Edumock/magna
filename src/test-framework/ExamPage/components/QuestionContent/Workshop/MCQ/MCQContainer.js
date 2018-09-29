import React, {Component} from 'react';
import {MCQUI} from "./MCQUI";
import {connect} from 'react-redux';
import {setCurrentQuestionChoiceIDAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";

class MCQContainer extends Component {


    constructor(props) {
        super(props);
        this.mcqChoiceSubmit = this.mcqChoiceSubmitCallback.bind(this);


    }


    mcqChoiceSubmitCallback(choiceID) {
        this.props.updateQuestionAttempt(choiceID);
    }


    render() {
        return (
            <MCQUI choices={this.props.question.choices}
                   mcqCallback={this.mcqChoiceSubmit}
                   questionHtml={this.props.question.html}
                   currentChoice={this.props.question.choice_id}
                   isComplete={this.props.isComplete}
                   correctChoiceID={this.props.question.choices.filter(choice => choice.is_correct === true)[0]}
            />
        )
    }


}

function mapStateToProps(state) {
    return {
        isComplete: state.test.is_complete
    }

}

function mapDispatchToProps(dispatch) {
    return {
        updateQuestionAttempt: (choiceId) => {
            dispatch(setCurrentQuestionChoiceIDAsyncAC(choiceId));
        }
    }

}


const MCQ = connect(mapStateToProps, mapDispatchToProps)(MCQContainer);
export {MCQ}