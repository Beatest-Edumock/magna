import React from 'react';
import {getTestsListAPI} from "../_Api/Tests/Tests";
import {TestPage} from "./TestPage";
import {connect} from 'react-redux';


class TestPageWrapper extends React.Component {

    state={
        data: ""
    }
    componentDidMount() {
        const {testType} = this.props.match.params;


        getTestsListAPI(testType).then(({data}) => {

            this.setState(
                    {
                        data: data
                    }
                );

        });
    }



    render() {

        return <TestPage data={this.state.data} isUserLoggedIn={this.props.isUserLoggedIn}/>

    }
}


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        ownProps
    }

}

const TestPageContainer = connect(mapStateToProps)(TestPageWrapper);
export {TestPageContainer}