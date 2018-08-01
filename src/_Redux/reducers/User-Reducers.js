import {ADD_USER, REMOVE_USER} from "_Redux/actions/user"

function userReducer(state, action) {

    switch (action.type) {
        case ADD_USER:
            console.log("add user case reached");
            return {...state, user: action.user};

        case REMOVE_USER:
            console.log("remove user case reached");
            return {...state, user: null};

        default:
            return state;

    }

}

export default userReducer;
