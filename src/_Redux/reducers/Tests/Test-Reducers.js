import {DECREMENT_LOADING, INCREMENT_LOADING} from "../../actions/test";

const defaultState = {
    loadingCount: 0

};

function testReducer(state = defaultState, action) {

    switch (action.type) {
        case INCREMENT_LOADING:
            return incrementLoading(state, action);
        case DECREMENT_LOADING:
            return decrementLoading(state, action);
        default :
            return state;
    }

}


function incrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    return {...state, loadingCount: loadingCount + 1}

}

function decrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    return {...state, loadingCount: loadingCount - 1}

}

export {testReducer};