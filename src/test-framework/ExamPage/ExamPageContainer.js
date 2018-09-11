import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {connect} from 'react-redux'
import {decrementLoadingAC, incrementLoadingAC, pushSectionDetailsAC, pushTestDetailsAC, setUpTestAsyncAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {GetTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";
import axios from 'axios'
import {pushTestAttemptAC} from "../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";
import {fetchAndPushQuestionDetailsAsyncAC, pushQuestionDetailsAC} from "../../_Redux/ActionCreators/Test/Questions-ActionCreator";
import {GetQuestionDetailsAPI} from "../../_Api/Tests/Sections/Questions/Questions";

class ExamPageContainer extends React.Component {

    componentDidMount() {
        const {testID} = this.props.match.params;


        GetTestGroupAPI(testID).then(
            axios.spread((testDetails, sectionDetails, testAttemptDetails) => {

                this.props.setupTestStore(testDetails.data, sectionDetails.data, testAttemptDetails.data)


            })
        );
    }


    render() {

        return <ExamPageUI loading={this.props.loadingCount}/>

    }
}


function mapStateToProps(state, ownProps) {
    return {
        loadingCount: state.test.loadingCount
    }

}


function mapDispatchToProps(dispatch) {

    return {

        setupTestStore: (testDetails, sectionDetails, testAttempt) => {

            dispatch(setUpTestAsyncAC(testDetails, sectionDetails, testAttempt));

        },
        pushQuestionDetails: (questionID) => {
            dispatch(fetchAndPushQuestionDetailsAsyncAC(questionID))

        }
    }

}

const ExamPageC = connect(mapStateToProps, mapDispatchToProps)(ExamPageContainer);
export {ExamPageC}