import React, {Component} from 'react';
import {QuestionButtonUI} from "./QuestionButtonUI";
import {changeCurrentQuestionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Questions-ActionCreator";
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
                              questionCallback={this.questionClickHandler}
                              isCurrent={this.props.questionID === this.props.currentQuestion}
                              html={this.props.questionHTML}
            />
        )
    }


}

function mapStateToProps(state, ownProps) {

    return {
        currentQuestion: state.test.currentQuestion,
        questionHTML: state.test.questionsByID[ownProps.questionID].html,
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

    questionHTML: PropTypes.string



};

export {QuestionButtonContainer}