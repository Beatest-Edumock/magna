import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {connect} from 'react-redux'
import {decrementLoadingAC, incrementLoadingAC, pushSectionDetailsAC, pushTestDetailsAC, setUpTestAsyncAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {GetTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";
import axios from 'axios'
import {pushTestAttemptAC} from "../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";

class ExamPageContainer extends React.Component {

    componentDidMount() {
        const {testID} = this.props.match.params;


        GetTestGroupAPI(testID).then(
            axios.spread((testDetails, sectionDetails, testAttemptDetails) => {
                // this.props.pushTestDetails(testDetails.data);
                // this.props.pushSectionDetails(sectionDetails.data);
                // this.props.pushTestAttemptDetails(testAttemptDetails.data);
                this.props.setupTestStore(testDetails.data, sectionDetails.data, testAttemptDetails.data)

                // this.props.removeLoader();

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

        }
    }

}

const ExamPageC = connect(mapStateToProps, mapDispatchToProps)(ExamPageContainer);
export {ExamPageC}