import {ADD_USER, REMOVE_USER} from "_Redux/actions/user"

function userReducer(state = null, action) {


    switch (action.type) {
        case ADD_USER:
            return action.user;

        case REMOVE_USER:
            return null;

        default:
            return state;

    }


}

export default userReducer;
