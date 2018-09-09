import React from 'react';
import {GetTestsListAPI} from "../_Api/Tests/Tests";
import {TestPage} from "./TestPage";
import axios from 'axios';


class TestPageContainer extends React.Component {

    state={
        data: ""
    }
    componentDidMount() {
        const {testType} = this.props.match.params;


        GetTestsListAPI(testType).then(({data}) => {
            this.setState(
                    {
                        data: data
                    }
                );

        });
    }


    render() {

        return <TestPage data={this.state.data}/>

    }
}

export {TestPageContainer}