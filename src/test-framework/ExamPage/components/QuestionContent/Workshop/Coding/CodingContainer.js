import React from "react";
import {CodingUI} from "./CodingUI";
import {connect} from 'react-redux';
import {runCodeAPI} from "../../../../../../_Api/Tests/Sections/Questions/Questions";
import {setCodingQuestionAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";

const languages = [
    {value: 'python', label: 'python'},
    {value: 'cpp', label: 'c++'},

];

class Coding extends React.Component {
    constructor(props) {
        super(props);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onRunClick = this.onRunClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.state = {code: props.question.long_answer, selectedLanguage: languages[0], outputs: null, currentlyRunning: false};
    }

    onSaveClick() {

        this.props.updateQuestionAttempt(this.state.code, this.state.selectedLanguage.value)
    }

    onRunClick() {
        this.setState({...this.state, currentlyRunning: true});

        runCodeAPI(this.state.code, this.state.selectedLanguage.value, this.props.question.coding_cases.map(el => el.input)).then(({data}) => {

            this.setState({...this.state, outputs: data, currentlyRunning: false})
        });

    }

    onLanguageChange(language) {
        this.setState({...this.state, selectedLanguage: language})
    }

    onCodeChange(code) {

        this.setState(
            {
                ...this.state,
                code
            })
    }

    render() {

        return (<CodingUI onLanguageChange={this.onLanguageChange}
                          onRunClick={this.onRunClick}
                          onSaveClick={this.onSaveClick}
                          onCodeChange={this.onCodeChange}

                          running={this.state.currentlyRunning}
                          languages={languages}
                          question={this.props.question}
                          selectedLanguage={this.state.selectedLanguage}
                          inputs={this.props.question.coding_cases.map((el) => el.input)}
                          outputs={this.state.outputs}
                          correctOutputs={this.props.question.coding_cases.map(el => el.right_output)}
                          code={this.state.code}

        />);

    }

}

function mapStateToProps(state) {
    return {
        question: state.test.questionsByID[state.test.currentQuestion]
    }

}

function mapDispatchToProps(dispatch) {
    return {
        updateQuestionAttempt: (code, coding_language) => {
            dispatch(setCodingQuestionAsyncAC(code, coding_language));
        }
    }

}

const CodingContainer = connect(mapStateToProps, mapDispatchToProps)(Coding);

export {CodingContainer};
