import React from 'react';
import {connect} from 'react-redux'
import {setUpTestAsyncAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {getTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";
import axios from 'axios'
import {_fetchAndPushQuestionDetailsAsyncAC} from "../../_Redux/ActionCreators/Test/Sections/Questions/Questions-ActionCreator";
import {decodeTestIDString} from "../Utilities";
import {checkVis} from "./FocusChange";
import {logTabChangeAPI} from "../../_Api/Tests/TestAttempts";

class ExamPageContainer extends React.Component {


    testID = null;

    constructor(props) {
        super(props);


        if (!props.isComplete && !props.isReviewMode)
            checkVis(() => {
                logTabChangeAPI(this.testID);
                console.log(this.props.testID);
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.testID = this.props.testID;


    }


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
        user: state.user,
        isComplete: state.test.is_complete,
        testID: state.test.id
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