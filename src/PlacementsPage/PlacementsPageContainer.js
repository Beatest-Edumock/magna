import React from 'react';
import {getTestsListAPI} from "../_Api/Tests/Tests";
import {PlacementsPage} from "./PlacementsPage";
import axios from 'axios';
import {connect} from 'react-redux';


class PlacementsPageWrapper extends React.Component {

    state={
        data: ""
    }
    componentDidMount() {
        const {testType} = this.props.match.params;


        getTestsListAPI("COLLEGE").then(({data}) => {

            this.setState(
                    {
                        data: data
                    }
                );

        });
    }



    render() {

        return <PlacementsPage data={this.state.data} isUserLoggedIn={this.props.isUserLoggedIn}/>

    }
}


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        ownProps
    }

}

const PlacementsPageContainer = connect(mapStateToProps)(PlacementsPageWrapper);
export {PlacementsPageContainer}