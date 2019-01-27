import React from "react";
import {CodingUI} from "./CodingUI";
import {connect} from 'react-redux';
import {runCodeAPI} from "../../../../../../_Api/Tests/Sections/Questions/Questions";
import {setCodingQuestionAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";
import {toast} from 'react-toastify';

import _ from "lodash";
import JavaStarter from './StarterCode/JavaStarter';
import CFamilyStarter from './StarterCode/CFamilyStarter';
import PythonStarter from './StarterCode/PythonStarter';


class Coding extends React.Component {

    getDefaultCodeAndMode(codeId) {
        if (codeId >= 4 && codeId <= 15) {
            let idx = _.findIndex(CFamilyStarter, function (o) {
                return o.id === codeId;
            });
            return {defaultCode: CFamilyStarter[idx].default, mode: 'cpp'};
        } else if (codeId >= 26 && codeId <= 28) {
            let idx = _.findIndex(JavaStarter, function (o) {
                return o.id === codeId;
            });
            return {defaultCode: JavaStarter[idx].default, mode: 'java'};
        } else if (codeId >= 34 && codeId < 37) {
            let idx = _.findIndex(PythonStarter, function (o) {
                return o.id === codeId;
            });
            return {defaultCode: PythonStarter[idx].default, mode: 'python'};
        }

        return {defaultCode: "", type: 'text'}
    }

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
        this.showSaveWorkNotification = this.showSaveWorkNotification.bind(this);

        const long_answer = props.question.long_answer;
        const coding_language = props.question.coding_language;

        this.languages = props.question.allowed_languages.map(el => {
            let getDefaultCodeAndMode = this.getDefaultCodeAndMode(el.id);
            return {value: el.id, label: el.name, defaultCode: getDefaultCodeAndMode.defaultCode, mode: getDefaultCodeAndMode.mode}
        });
        console.log(this.languages);

        this.state = {
            code: long_answer == null ? "" : long_answer,
            selectedLanguage: coding_language == null ? this.languages[0] : coding_language,
            outputs: null,
            currentlyRunning: false
        };
        this.showSaveWorkNotification(props);
    }

    onSaveClick() {


        if (this.state.code !== "")
        //This means that the user tried to click save on just the supplied starter code.
            this.props.updateQuestionAttempt(this.state.code, this.state.selectedLanguage.value);
        else {
            toast.info("Please attempt the question before saving");
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.question.id !== this.props.question.id) {
            this.showSaveWorkNotification(this.props);

            const long_answer = nextProps.question.long_answer;
            const coding_language = nextProps.question.coding_language;

            this.setState({
                code: long_answer == null ? "" : long_answer,
                selectedLanguage: coding_language == null ? this.languages[0] : coding_language,
                outputs: null,
                currentlyRunning: false
            });


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
                          languages={this.languages}
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
        updateQuestionAttempt: (code, language_id) => {
            dispatch(setCodingQuestionAsyncAC(code, language_id));
        }
    }

}

const CodingContainer = connect(mapStateToProps, mapDispatchToProps)(Coding);

export {CodingContainer};
