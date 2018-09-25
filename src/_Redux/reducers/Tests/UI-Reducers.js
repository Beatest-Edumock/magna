function pushError(state, {errorDetails}) {

    return {
        ...state,
        error: {
            ...errorDetails,

        }

    }
}

/**
 * Increment loading key by one
 *
 * @param state
 * @param action
 * @returns {{loadingCount: number}}
 */
function incrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    return {...state, loadingCount: loadingCount + 1}

}

/**
 * Decrement loading key one.
 * If the state's loadingCount is 0, it will not be
 * decremented (i.e. the minimum value of loadingCount is 0 )
 *
 * @param state
 * @param action
 * @returns {{loadingCount: number}}
 */
function decrementLoading(state, action) {
    const loadingCount = state.loadingCount;
    const newCount = loadingCount > 0 ? loadingCount - 1 : 0;

    return {...state, loadingCount: newCount}

}


export {incrementLoading, decrementLoading, pushError}
