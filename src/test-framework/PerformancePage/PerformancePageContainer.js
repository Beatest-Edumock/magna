import React from 'react';
import {connect} from 'react-redux';
import {PerformancePageUI} from "./PerformancePageUI";
import {getPerformanceAPI} from "../../_Api/Tests/TestAttempts";
import {TEST_PAGE_ROUTE} from "../../route";
import {history} from "../../__internals/CustomHistory";
import {LoadingSpinner} from "../ExamPage/LoadingSpinner";
import {getTestDetailsAPI} from "../../_Api/Tests/Tests";

class PerformancePage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {data: null, user: props.user, testDetails: null};

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
                                  data={this.state.data}/>;

    }


    componentDidMount() {

        const {testID} = this.props.match.params;

        getPerformanceAPI(testID).then(({data}) => {
            this.setState({data});
        });

        getTestDetailsAPI(testID).then(({data}) => {
            this.setState({...this.state, testDetails: data})

        });

    }

}


function mapStateToProps(state) {

    return {
        user: state.user
    }

}

export const PerformancePageContainer = connect(mapStateToProps, null)(PerformancePage);
