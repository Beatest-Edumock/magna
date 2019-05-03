import React from 'react';
import {getCollegeProfile, getTestsListAPI} from "../_Api/Tests/Tests";
import {CorporateTestPageUI} from "./CorporateTestPageUI";
import {connect} from 'react-redux';
import {getCorporate} from "../_Api/Corporates";


class CorporateTestWrapper extends React.Component {

    state = {
        data: ""
    }

    componentDidMount() {

        const {slug, testType} = this.props.match.params;

        getCorporate(slug).then(({data}) => {

            this.setState(
                {
                    corporate: data
                }
            );
        });


        getTestsListAPI(testType).then(({data}) => {

            this.setState(
                {
                    data: data
                }
            );

        });

    }


    render() {

        return <CorporateTestPageUI corporate={this.state.corporate} data={this.state.data} isUserLoggedIn={this.props.isUserLoggedIn}/>

    }
}


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        user: state.user,
        ownProps
    }

}

const CorporateTestContainer = connect(mapStateToProps)(CorporateTestWrapper);
export {CorporateTestContainer}