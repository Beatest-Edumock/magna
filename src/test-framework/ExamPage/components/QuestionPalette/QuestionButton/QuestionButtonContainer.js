import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";
import {changeCurrentQuestionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Questions/Questions-ActionCreator";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class QuestionButton extends Component {

    constructor(props) {
        super(props);
        this.questionClickHandler = this.questionButtonClickHandler.bind(this)

    }

    questionButtonClickHandler() {
        // id is the question current index in the section
        this.props.changeCurrentQuestion(this.props.questionID);
    }


    render() {

        return (
            <QuestionButtonUI id={this.props.id}
                              loaded={this.props.questionDetails.html === undefined}
                              questionCallback={this.questionClickHandler}
                              isCurrent={this.props.questionID === this.props.currentQuestion}
                              attempt_status={this.props.questionDetails.attempt_status}
                              choice_id={this.props.questionDetails.choice_id}
                              tita_choice={this.props.questionDetails.tita_choice}

            />
        )
    }


}

function mapStateToProps(state, ownProps) {

    return {
        currentQuestion: state.test.currentQuestion,

        questionDetails: state.test.questionsByID[ownProps.questionID],
        ...ownProps

    }

}

function mapDispatchToProps(dispatch) {

    return {
        changeCurrentQuestion: (questionID) => {

            dispatch(changeCurrentQuestionAsyncAC(questionID));

        }
    }
}

const QuestionButtonContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionButton);

QuestionButton.propTypes = {

    /**
     * id of the question
     */
    questionID: PropTypes.string.isRequired,


    /**
     * the index of the button.
     * (first button should start at 1)
     */
    id: PropTypes.number.isRequired,


    /**
     * The current question in the redux store.
     */
    currentQuestion: PropTypes.string.isRequired,


    /**
     * The html of the question. Useful for
     * indicating question loaded status in the button
     *
     */

    questionDetails: PropTypes.string


};

export {QuestionButtonContainer}