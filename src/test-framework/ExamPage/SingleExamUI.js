import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {connect} from 'react-redux'
import {decrementLoadingAC, incrementLoadingAC} from "../../_Redux/ActionCreators/Test/Test-ActionCreator";


class ExamUIPage extends React.Component {

    componentDidMount() {

        this.props.addLoader();
        this.props.addLoader();
        this.props.addLoader();
        this.props.addLoader();
        this.props.addLoader();

        this.props.removeLoader();
        this.props.removeLoader();
        this.props.removeLoader();
        this.props.removeLoader();
        this.props.removeLoader();
        this.props.removeLoader();
    }


    render() {
        if (this.props.loadingCount)
            return <LoadingScreen/>;

        else {
            return <div>Read</div>;
        }

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

const ExamUI = connect(mapStateToProps, mapDispatchToProps)(ExamUIPage);
export {ExamUI}