import React from 'react';
import {connect} from 'react-redux'
import NavBarUI from './NavBar';
import {removeUserAC} from "_Redux/ActionCreators/User/User-ActionCreator"


function mapSateToProps(state) {
    return {
        isLoggedIn: state.user
    }

}

function mapDispatchToProps(dispatch) {

    return {
        removeUserAction: () => {
            dispatch(removeUserAC());
        }
    }
}


const NavBarContainer = connect(mapSateToProps, mapDispatchToProps)(NavBarUI);

export default NavBarContainer;