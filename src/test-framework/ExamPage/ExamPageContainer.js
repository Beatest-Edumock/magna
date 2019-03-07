import React from 'react';
import {connect} from 'react-redux'
import {setUpTestAsyncAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {getTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";
import axios from 'axios'
import {_fetchAndPushQuestionDetailsAsyncAC} from "../../_Redux/ActionCreators/Test/Sections/Questions/Questions-ActionCreator";
import {decodeTestIDString} from "../Utilities";

class ExamPageContainer extends React.Component {


    componentDidMount() {
        const {testID} = this.props.match.params;


        getTestGroupAPI(decodeTestIDString(testID)).then(
            axios.spread((testDetails, sectionDetails, testAttemptDetails) => {

                this.props.setupTestStore(testDetails.data, sectionDetails.data, testAttemptDetails.data)


            })
        );
    }


    render() {

        return <ExamPageUI loading={this.props.loadingCount > 0 || this.props.user == null} isReviewMode={this.props.isReviewMode}/>

    }
}


function mapStateToProps(state, ownProps) {
    return {
        loadingCount: state.test.loadingCount,
        isReviewMode: state.test.reviewMode,
        user: state.user
    }

}


function mapDispatchToProps(dispatch) {

    return {

        setupTestStore: (testDetails, sectionDetails, testAttempt) => {

            dispatch(setUpTestAsyncAC(testDetails, sectionDetails, testAttempt));

        },
        pushQuestionDetails: (questionID) => {
            dispatch(_fetchAndPushQuestionDetailsAsyncAC(questionID))

        }
    }

}

const ExamPageC = connect(mapStateToProps, mapDispatchToProps)(ExamPageContainer);
export {ExamPageC}