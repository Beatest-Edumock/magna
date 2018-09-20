import React, {Component} from 'react';
import {QuestionContentUI} from "./QuestionContentUI";
import {connect} from 'react-redux';

class QuestionContent extends Component {


    render() {

        return <QuestionContentUI question={this.props.question}/>
    }

}

function mapStateToProps(state) {

    return {
        question: state.test.questionsByID[state.test.currentQuestion]

    }

}


const QuestionContentContainer = connect(mapStateToProps, null)(QuestionContent);

export {QuestionContentContainer};