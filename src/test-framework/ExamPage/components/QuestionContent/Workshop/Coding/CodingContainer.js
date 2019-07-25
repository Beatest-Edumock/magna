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
            return {defaultCode: CFamilyStarter[idx].default, mode: 'c_cpp'};
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
        this.timeOfLastUpdate = Date.now();
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.onRunClick = this.onRunClick.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.debouncedSave = _.debounce(this.onSaveClick, 1000);


        this.onCodeChange = this.onCodeChange.bind(this);
        this.showSaveWorkNotification = this.showSaveWorkNotification.bind(this);
        this.onCheckBoxToggle = this.onCheckBoxToggle.bind(this);
        this.onCustomInputChange = this.onCustomInputChange.bind(this);

        const long_answer = props.question.long_answer;

        let selected_language = null;

        const allLanguages = props.question.allowed_languages.map(el => {
            let getDefaultCodeAndMode = this.getDefaultCodeAndMode(el.id);

            if (el.id === props.question.chosen_language_id) {
                selected_language = {value: el.id, label: el.name, mode: getDefaultCodeAndMode.mode}

            }
            return {value: el.id, label: el.name, defaultCode: getDefaultCodeAndMode.defaultCode, mode: getDefaultCodeAndMode.mode};
        });

        this.state = {
            code: long_answer == null ? "" : long_answer,
            allLanguages: allLanguages,
            selectedLanguage: selected_language == null ? allLanguages[0] : selected_language,
            outputs: null,
            runTimes: null,
            isChecked: false,
            customInput: "",
            currentlyRunning: false
        };
        this.showSaveWorkNotification(props);
    }


    onSaveClick() {


        if (this.state.code !== "" && this.state.selectedLanguage.value)
        //This means that the user tried to click save on just the supplied starter code.
            this.props.updateQuestionAttempt(this.state.code, this.state.selectedLanguage.value);
        else {
            toast.info("Please attempt the question before saving");
        }
    }

    componentWillReceiveProps(nextProps, nextState) {

        if (nextProps.question.id !== this.props.question.id) {

            this.timeOfLastUpdate = Date.now();

            this.showSaveWorkNotification(this.props);

            const long_answer = nextProps.question.long_answer;

            let selected_language = null;

            const allLanguages = nextProps.question.allowed_languages.map(el => {
                let getDefaultCodeAndMode = this.getDefaultCodeAndMode(el.id);

                if (el.id === nextProps.question.chosen_language_id) {
                    selected_language = {value: el.id, label: el.name, mode: getDefaultCodeAndMode.mode}
                }

                return {value: el.id, label: el.name, defaultCode: getDefaultCodeAndMode.defaultCode, mode: getDefaultCodeAndMode.mode};
            });

            this.setState({
                code: long_answer == null ? "" : long_answer,
                allLanguages: allLanguages,
                selectedLanguage: selected_language == null ? allLanguages[0] : selected_language,
                outputs: null,
                runTimes: null,
                isChecked: false,
                customInput: "",
                currentlyRunning: false
            });


        }

        // if (nextProps.question.id !== this.props.question.id) {
        //     console.log("GOT IN");
        //     setInterval(() => {
        //
        //             if (this.state.code !== "" && this.state.selectedLanguage.value)
        //                 console.log("GAYA");
        //                 // this.props.updateQuestionAttempt(this.state.code, this.state.selectedLanguage.value);
        //         },
        //         1000);
        //
        // }

        if (this.state.code !== "" && nextProps.question.long_answer === null && (this.props.question.id === nextProps.question.id)) {

            this.setState({
                ...this.state,
                code: ""
            })

        }


        return true;
    }

    onCustomInputChange(event) {
        this.setState({...this.state, customInput: event.target.value});
    }

    onCheckBoxToggle() {
        this.setState({...this.state, isChecked: !this.state.isChecked});
    }

    onRunClick() {

        if (this.state.code === "") {
            toast.info("Please attempt the question before running");
        }

        this.setState({...this.state, currentlyRunning: true});

        let inputs = [];

        if (this.state.isChecked) {
            inputs.push(this.state.customInput);
        } else {
            inputs = this.props.question.coding_cases.map(el => el.input);
        }

        runCodeAPI(this.state.code, this.state.selectedLanguage.value, inputs)
            .then(({data}) => {
                this.setState({...this.state, outputs: data[0], runTimes: data[1], memoryTaken: data[2], currentlyRunning: false,});

                this.testCaseDisplay.scrollIntoView({block: 'end', behavior: 'smooth'});

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

        this.debouncedSave();


        // if (now - this.timeOfLastUpdate > 5000) {
        //     this.onSaveClick();
        //     this.timeOfLastUpdate = now;
        //
        // }
    }

    render() {
        let inputTestCase = [];
        if (this.state.isChecked) {
            inputTestCase.push(this.state.customInput);
        } else {
            inputTestCase = this.props.question.coding_cases.map(el => el.input);
        }

        return (<CodingUI onLanguageChange={this.onLanguageChange}

                          setRef={(ref) => {
                              console.log("HMMMMMMMMMMMMM");
                              this.testCaseDisplay = ref;
                          }}
                          onRunClick={this.onRunClick}
                          onCheckBoxToggle={this.onCheckBoxToggle}
                          onSaveClick={this.onSaveClick}
                          onCodeChange={this.onCodeChange}
                          running={this.state.currentlyRunning}
                          languages={this.state.allLanguages}
                          question={this.props.question}
                          selectedLanguage={this.state.selectedLanguage}
                          inputs={inputTestCase}
                          outputs={this.state.outputs}
                          runTimes={this.state.runTimes}
                          memoryTaken={this.state.memoryTaken}
                          correctOutputs={this.props.question.coding_cases.map(el => el.right_output)}
                          isChecked={this.state.isChecked}
                          code={this.state.code}
                          onCustomInputChange={this.onCustomInputChange}
                          customInput={this.state.customInput}
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
