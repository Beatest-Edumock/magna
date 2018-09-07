import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {connect} from 'react-redux'
import {decrementLoadingAC, incrementLoadingAC, pushSectionDetailsAC, pushTestDetailsAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {GetTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";
import axios from 'axios'
import {pushTestAttemptAC} from "../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";

class ExamPageContainer extends React.Component {

    componentDidMount() {
        const {testID} = this.props.match.params;

        this.props.addLoader();

        GetTestGroupAPI(testID).then(
            axios.spread((testDetails, sectionDetails, testAttemptDetails) => {
                this.props.pushTestDetails(testDetails.data);
                this.props.pushSectionDetails(sectionDetails.data);
                this.props.pushTestAttemptDetails(testAttemptDetails.data);

                this.props.removeLoader();

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
        addLoader: () => {
            dispatch(incrementLoadingAC())
        },
        removeLoader: () => {
            dispatch(decrementLoadingAC());
        },
        pushTestDetails: (testDetails) => {
            dispatch(pushTestDetailsAC(testDetails))

        },
        pushSectionDetails: (sectionDetails) => {
            dispatch(pushSectionDetailsAC(sectionDetails))
        },
        pushTestAttemptDetails: (testDetails) => {
            dispatch(pushTestAttemptAC(testDetails))
        }
    }

}

const ExamPageC = connect(mapStateToProps, mapDispatchToProps)(ExamPageContainer);
export {ExamPageC}