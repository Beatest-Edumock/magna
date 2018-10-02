import React, {Component} from 'react';
import {TITAUI} from "./TITAUI";
import connect from "react-redux/es/connect/connect";
import {
    setCurrentQuestionTITAAnswerAsyncAC
} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";

/**
 *
 * The TITA number pad.
 *
 * It displays a text input field (non editable)
 * and a set of buttons to store a user's answer.
 *
 * This takes in the state from the redux store and displays it as a placeholder in
 * the text area.
 *
 * If the user starts using the numpad, the text area changes to the numbers
 * he is pressing.
 *
 * If user clicks on submit, then the action is dispatched to the redux store (along with an api call).
 *
 * if the user moves away from a question while he has unsubmitted input, that input is lost.
 *
 */
class TITAContainer extends Component {

    constructor (props) {
        super(props);

        this.handleSubmit= this.handleSubmitFunc.bind(this);
        this.handleValueUpdate = this.handleValueUpdateFunc.bind(this);
        this.handleBackSpace = this.handleBackSpaceFunc.bind(this);
        const localQuestionID = this.props.currentQuestionID;
        this.state = {
            localValue : "",
            localQuestionID: localQuestionID
        }
    }

    handleBackSpaceFunc() {
        this.setState ({
            localValue: this.state.localValue.slice(0, -1)
        })
    }

    handleSubmitFunc() {

        this.props.updateQuestionAttempt(this.state.localValue)
        this.setState ({
            localValue : ""
        })
    }

    handleValueUpdateFunc(value) {
        this.setState(
            {
            localValue: this.state.localValue + String(value)
            })
    }



    componentDidUpdate(prevProps, prevState) {

        if(this.state.localQuestionID !== this.props.currentQuestionID) {
            this.setState({
                localQuestionID: this.props.currentQuestionID,
                localValue: ""
            })
        }
    }

    render() {


        return(
            <TITAUI localValue={this.state.localValue}
                    tita_choice={this.props.tita_choice}
                    handleValueUpdate={this.handleValueUpdate}
                    handleSubmit={this.handleSubmit}
                    questionHtml={this.props.currentQuestion.html}
                    handleBackSpace={this.handleBackSpace}
                    isComplete={this.props.isComplete}
                    titaAnswer={this.props.titaCorrectAnswer}
            />
        )
    }
}


function mapStateToProps(state) {
    return {

        tita_choice: state.test.questionsByID[state.test.currentQuestion].tita_choice,
        currentQuestion: state.test.questionsByID[state.test.currentQuestion],
        currentQuestionID: state.test.currentQuestion,
        isComplete: state.test.is_complete,
        titaCorrectAnswer: state.test.questionsByID[state.test.currentQuestion].tita_answer

    }

}

function mapDispatchToProps(dispatch) {
    return {
        updateQuestionAttempt: (titaChoice) => {
            dispatch(setCurrentQuestionTITAAnswerAsyncAC(titaChoice));
        }
    }

}

const TITA = connect(mapStateToProps, mapDispatchToProps)(TITAContainer);
export {TITA}