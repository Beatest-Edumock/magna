import React from 'react';
import {getCollegeProfile, getTestsListAPI} from "../_Api/Tests/Tests";
import {PlacementsPage} from "./PlacementsPage";
import {connect} from 'react-redux';


class PlacementsPageWrapper extends React.Component {

    state={
        data: ""
    }
    componentDidMount() {


        getCollegeProfile().then(({data}) => {

            this.setState(
                    {
                        data: data
                    }
                );

        });
    }



    render() {

        return <PlacementsPage user={this.props.user} data={this.state.data} isUserLoggedIn={this.props.isUserLoggedIn}/>

    }
}


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        user: state.user,
        ownProps
    }

}

const PlacementsPageContainer = connect(mapStateToProps)(PlacementsPageWrapper);
export {PlacementsPageContainer}