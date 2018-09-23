import React, {Component} from 'react';
import {MCQUI} from "./MCQUI";
import {connect} from  'react-redux';
import {updateQuestionAttemptAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";

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
            dispatch(updateQuestionAttemptAsyncAC({"choice_id": choiceId}));
        }
    }

}



const MCQ = connect(null, mapDispatchToProps)(MCQContainer);
export {MCQ}