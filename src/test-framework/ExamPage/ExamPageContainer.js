import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {connect} from 'react-redux'
import {decrementLoadingAC, incrementLoadingAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";
import {GetTestGroupAPI} from "../../_Api/Tests/Tests";
import {ExamPageUI} from "./ExamUI";

class ExamPageContainer extends React.Component {

    componentDidMount() {
        const {testID} = this.props.match.params;
        console.log(GetTestGroupAPI(testID));
        // this.props.addLoader();
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
        }
    }

}

const ExamPageC = connect(mapStateToProps, mapDispatchToProps)(ExamPageContainer);
export {ExamPageC}