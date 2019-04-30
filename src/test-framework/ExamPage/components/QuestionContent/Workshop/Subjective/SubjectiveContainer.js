import React from "react";
import {SubjectiveUI} from "./SubjectiveUI";
import {connect} from 'react-redux';
import {runCodeAPI} from "../../../../../../_Api/Tests/Sections/Questions/Questions";
import {setCodingQuestionAsyncAC} from "../../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";
import {toast} from 'react-toastify';
import RichTextEditor from 'react-rte';

import _ from "lodash";

class Subjective extends React.Component {

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
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.showSaveWorkNotification = this.showSaveWorkNotification.bind(this);

        // console.log("long ");
        // console.log(props.long_answer);

        this.state = {
            long_answer: props.question.long_answer === null ? RichTextEditor.createEmptyValue() : RichTextEditor.createValueFromString(props.question.long_answer, 'html'),
            currentlyRunning: false
        };
        this.showSaveWorkNotification(props);
    }

    onSaveClick() {

        this.props.updateQuestionAttempt(this.state.long_answer.toString('html'));

    }

    componentWillReceiveProps(nextProps, nextState) {

        if (nextProps.question.id !== this.props.question.id) {
            this.timeOfLastUpdate = Date.now();

            this.showSaveWorkNotification(this.props);

            this.state = {
                long_answer: nextProps.question.long_answer == null ? RichTextEditor.createEmptyValue() : RichTextEditor.createValueFromString(nextProps.question.long_answer, 'html'),
                currentlyRunning: false
            };


        }

        if (this.state.long_answer !== "" && nextProps.question.long_answer === null && (this.props.question.id === nextProps.question.id)) {

            this.setState({
                ...this.state,
                long_answer: RichTextEditor.createEmptyValue()
            })

        }


        return true;
    }

    onTextChange(long_answer) {
        const now = new Date();


        this.setState(
            {
                ...this.state,
                long_answer
            });

        if (now - this.timeOfLastUpdate > 5000) {
            this.onSaveClick();
            this.timeOfLastUpdate = now;

        }
    }

    render() {
        return (<SubjectiveUI onSaveClick={this.onSaveClick}
                              onTextChange={this.onTextChange}
                              running={this.state.currentlyRunning}
                              question={this.props.question}
                              long_answer={this.state.long_answer}
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
        updateQuestionAttempt: (long_answer) => {
            dispatch(setCodingQuestionAsyncAC(long_answer));
        }
    }

}

const SubjectiveContainer = connect(mapStateToProps, mapDispatchToProps)(Subjective);

export {SubjectiveContainer};
