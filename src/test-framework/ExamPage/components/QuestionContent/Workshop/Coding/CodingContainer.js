import React from "react";
import {CodingUI} from "./CodingUI";
import {connect} from 'react-redux';
import {runCodeAPI} from "../../../../../../_Api/Tests/Sections/Questions/Questions";
import {setCodingQuestionAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";
import {toast} from 'react-toastify';

const languages = [
    {value: 'python', label: 'python'},
    {value: 'cpp', label: 'c++'},
    {value: 'java', label: 'java'}

];

class Coding extends React.Component {

    showSaveWorkNotification(props) {

        if (!props.isTestComplete) {
            toast.info(`Remember to save your work!`, {
                autoClose: 5000
            });
        }
    }

    constructor(props) {
        super(props);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onRunClick = this.onRunClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onCodeChange = this.onCodeChange.bind(this);
        this.showSaveWorkNotification = this.showSaveWorkNotification.bind();

        const long_answer = props.question.long_answer;
        this.state = {code: long_answer == null ? "" : long_answer, selectedLanguage: languages[0], outputs: null, currentlyRunning: false};
        this.showSaveWorkNotification(props);
    }

    onSaveClick() {

        this.props.updateQuestionAttempt(this.state.code, this.state.selectedLanguage.value)
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.question.id !== this.props.question.id) {
            this.showSaveWorkNotification(this.props);
        }


        return true;
    }

    onRunClick() {
        this.setState({...this.state, currentlyRunning: true});

        runCodeAPI(this.state.code, this.state.selectedLanguage.value, this.props.question.coding_cases.map(el => el.input))
            .then(({data}) => {

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
            });
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
                          readOnly={this.props.isTestComplete}

        />);

    }

}

function mapStateToProps(state) {
    return {
        isTestComplete: state.test.is_complete,
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
