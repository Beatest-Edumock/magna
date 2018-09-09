import {ADD_USER, REMOVE_USER} from "_Redux/actions/user"

/**
 *
 * Add the user to the store
 * @param user :  user object returned from api/user
 *
 * @returns {{type: string, user: *}}
 */
function addUserAC(user) {

    return {type: ADD_USER, user};


}


function removeUserAC() {

    return {type: REMOVE_USER};


}

export {addUserAC, removeUserAC};