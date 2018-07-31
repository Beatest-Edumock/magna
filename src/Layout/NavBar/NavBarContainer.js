import React from 'react';
import {connect} from 'react-redux'
import NavBarUI from './NavBar'
import add_user_action_create_api from '../../_Redux/ActionCreators/User/User-ActionCreator'


function mapSateToProps(state, ownProps) {
    return {
        isLoggedIn: state.user
    }

}

function mapDispatchToProps(dispatch) {
    return ({
        loginUser: (user) => dispatch(add_user_action_create_api(user))
    });

}

const NavBarContainer = connect(mapSateToProps, mapDispatchToProps)(NavBarUI);

export default NavBarContainer;