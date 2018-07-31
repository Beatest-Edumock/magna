import React from 'react';
import {connect} from 'react-redux'
import NavBarUI from './NavBar';
import {remove_user_action} from "_Redux/ActionCreators/User/User-ActionCreator"


function mapSateToProps(state) {
    return {
        isLoggedIn: state.user
    }

}

function mapDispatchToProps(dispatch) {

    return {
        removeUserAction: () => {
            dispatch(remove_user_action());
        }
    }
}


const NavBarContainer = connect(mapSateToProps, mapDispatchToProps)(NavBarUI);

export default NavBarContainer;