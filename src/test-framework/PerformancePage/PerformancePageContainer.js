import React from 'react';
import {connect} from 'react-redux';
import {PerformancePageUI} from "./PerformancePageUI";
import {getPerformanceAPI, getTestAttemptReportAPI} from "../../_Api/Tests/TestAttempts";
import {TEST_PAGE_ROUTE} from "../../route";
import {history} from "../../__internals/CustomHistory";
import {LoadingSpinner} from "../ExamPage/LoadingSpinner";
import {getTestDetailsAPI} from "../../_Api/Tests/Tests";
import {decodeTestIDString} from "../Utilities";

class PerformancePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {data: null, user: props.user, testDetails: null, testAttemptReport: null};

        this.viewPerformanceClickHandler = this.viewPerformanceClickHandler.bind(this);
    }

    viewPerformanceClickHandler() {
        const {testID} = this.props.match.params;
        const url = TEST_PAGE_ROUTE(testID);
        history.replace(url);

    }


    render() {
        if (this.state.data === null || this.state.testDetails === null || this.props.user == null) {
            return <LoadingSpinner/>
        }
        return <PerformancePageUI testDetails={this.state.testDetails}
                                  user={this.props.user}
                                  viewPerformanceClickHandler={this.viewPerformanceClickHandler}
                                  testAttemptReport={this.state.testAttemptReport}
                                  data={this.state.data}/>;

    }


    componentDidMount() {

        let {testID} = this.props.match.params;

        testID = decodeTestIDString(testID);

        getPerformanceAPI(testID).then(({data}) => {
            this.setState({data});
        });

        getTestDetailsAPI(testID).then(({data}) => {
            this.setState({...this.state, testDetails: data})

        });

        let asUserID = (new URL(document.location)).searchParams.get("asUser");
        if (asUserID)
            getTestAttemptReportAPI(testID).then(({data}) => {
                delete data['test_attempt_id'];
                delete data['is_finished'];
                delete data['create_date'];
                delete data['finish_date'];


                this.setState({...this.state, testAttemptReport: data})
            })

    }

}


function mapStateToProps(state) {

    return {
        user: state.user
    }

}

export const PerformancePageContainer = connect(mapStateToProps, null)(PerformancePage);
