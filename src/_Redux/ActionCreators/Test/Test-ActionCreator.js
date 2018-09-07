import {DECREMENT_LOADING, INCREMENT_LOADING} from "../../actions/test";


function incrementLoadingAC() {
    return {type: INCREMENT_LOADING}

}

function decrementLoadingAC() {
    return {type: DECREMENT_LOADING}

}

export {incrementLoadingAC, decrementLoadingAC}