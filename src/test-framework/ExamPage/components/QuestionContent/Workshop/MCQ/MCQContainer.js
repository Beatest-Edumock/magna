import React, {Component} from 'react';
import {MCQUI} from "./MCQUI";
import {connect} from  'react-redux';
import {updateQuestionAttemptChoiceAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";

class MCQContainer extends Component{


    constructor(props) {
        super(props);
        this.mcqChoiceSubmit = this.mcqChoiceSubmitCallback.bind(this);


    }


    mcqChoiceSubmitCallback(choiceID) {
        this.props.updateQuestionAttempt(choiceID);
        console.log(this.props.chosenID);
    }


    render() {
        return(
            <MCQUI choices={this.props.choices}
                   mcqCallback={this.mcqChoiceSubmit}
                   currentChoice={this.props.chosenID}/>
        )
    }


}

function mapDispatchToProps(dispatch) {
    return {
        updateQuestionAttempt: (choiceId) => {
            dispatch(updateQuestionAttemptChoiceAsyncAC(choiceId));
        }
    }

}

function mapStatesToProps(state) {

    return {
        choices: state.test.questionsByID[state.test.currentQuestion].choices,
        chosenID: state.test.questionsByID[state.test.currentQuestion].choice_id
    }

}

const MCQ = connect(mapStatesToProps, mapDispatchToProps)(MCQContainer);
export {MCQ}