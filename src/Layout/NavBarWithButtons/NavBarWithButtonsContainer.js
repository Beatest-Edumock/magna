import {connect} from 'react-redux';
import {NavBarWithButtons} from "./NavBarWithButtons";
import {removeUserAC} from "../../_Redux/ActionCreators/User-ActionCreator";


function mapStateToProps(state, ownProps) {

    return {
        isUserLoggedIn: state.user,
        lightLogo: ownProps.lightLogo
    }

}

function mapDispatchToProps(dispatch) {

    return {
        removeUserAction: () => {
            dispatch(removeUserAC());
        }
    }

}


const NavBarWithButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(NavBarWithButtons);

export {NavBarWithButtonsContainer}



