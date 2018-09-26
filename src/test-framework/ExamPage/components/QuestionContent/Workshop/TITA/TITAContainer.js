import React, {Component} from 'react';
import {TITAUI} from "./TITAUI";
import connect from "react-redux/es/connect/connect";
import {
    setCurrentQuestionTITAAnswerAsyncAC
} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";

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
        console.log(value);
        console.log(this.state.localValue);
        this.setState(
            {
            localValue: this.state.localValue + String(value)
            })
    }



    render() {

        if(this.state.localQuestionID != this.props.currentQuestionID) {
            this.setState({
                localQuestionID: this.props.currentQuestionID,
                localValue: ""
            })
        }

        return(
            <TITAUI localValue={this.state.localValue}
                    tita_choice={this.props.tita_choice}
                    handleValueUpdate={this.handleValueUpdate}
                    handleSubmit={this.handleSubmit}
                    questionHtml={this.props.currentQuestion.html}
                    handleBackSpace={this.handleBackSpace}
            />
        )
    }
}


function mapStateToProps(state) {
    return {

        tita_choice: state.test.questionsByID[state.test.currentQuestion].tita_choice,
        currentQuestion: state.test.questionsByID[state.test.currentQuestion],
        currentQuestionID: state.test.currentQuestion,
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