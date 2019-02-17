import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {UpdateScoreButtonUI} from "./UpdateScoreButtonUI";
import {toast} from 'react-toastify';
import {setCurrentQuestionScoreAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Questions/QuestionAttempt-ActionCreator";


class UpdateScoreButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.handleUpdateScoreCallback = this.handleUpdateScore.bind(this);
    }


    handleUpdateScore() {
        toast.info("Updating with new value : " + this.props.customInput);
        this.props.updateScore(this.props.customInput);
    }

    render() {
        return (
            <UpdateScoreButtonUI
                updateScoreCallback={this.handleUpdateScoreCallback}
                testIsComplete={this.props.testIsComplete}
            />
        )
    }

}

function mapStateToProps(state) {
    return {
        testID: state.test.id,
        testIsComplete: state.test.is_complete
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateScore: (score) => {
            dispatch(setCurrentQuestionScoreAsyncAC(score));
        }
    }
}

const UpdateScoreButton = connect(mapStateToProps, mapDispatchToProps)(UpdateScoreButtonContainer);

export {UpdateScoreButton}



