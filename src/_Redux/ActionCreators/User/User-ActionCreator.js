import {ADD_USER, REMOVE_USER} from "_Redux/actions/user"
import LoginUser from "_Api/User"
import {ToastContainer, toast} from "react-toastify";
import history from "__internals/CustomHistory";

/**
 *
 * Add the user to the store
 * @param user : the user object retured from api/user
 *
 * @returns {{type: string, user: *}}
 */
function add_user_action(user) {

    return {type: ADD_USER, user};


}


function remove_user_action() {

    return {type: REMOVE_USER};


}

export {add_user_action, remove_user_action};