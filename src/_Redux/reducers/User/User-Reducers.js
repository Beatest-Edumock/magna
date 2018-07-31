import ADD_USER from "../../actions/user"

function add_user(state = null, action) {

    switch (action.type) {
        case ADD_USER:
            return {...state, user: action.user};
        default:
            return state;

    }

}

export default add_user;
