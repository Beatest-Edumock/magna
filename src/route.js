/**
 *
 * route.js.
 *
 * ALL routes that can be be used in the app are declared here.
 * This makes changing routes easy.
 *
 * Routes that take in parameters must have a blueprint=false parameter
 * at the end.
 *
 * If the parameter is passed as null, a string that react router 4 can understand
 * must be returned.
 *
 * If that parameter is not passed, a string with the values filled in will be
 * returned.
 *
 * (See TEST_PAGE_ROUTE for an example)
 *
 */













export const ROOT_ROUTE = () => {

    return "/";

};

export const LOGIN_ROUTE = () => {

    return "/login";

};

export const SIGNUP_ROUTE = () => {

    return "/signup";

};


export const RESEND_ACTIVATION_ROUTE = () => {

    return "/resend-activation"

};


export const TERMS_AND_CONDS_ROUTE = () => {

    return "/terms";

};


export const ABOUT_US_ROUTE = () => {

    return "/about-us";

};

export const TEST_LIST_ROUTE = (testType, blueprint = false) => {

    if (blueprint) {
        return "/tests/:testType"
    }

    return `/tests/${testType}`

};

export const TEST_INSTRUCTIONS_ROUTE = (testID, blueprint = false) => {

    if (blueprint) {
        return "/test/:testID/instructions"
    }

    return `/test/${testID}/instructions`

};


export const TEST_PAGE_ROUTE = (testID, blueprint = false) => {

    if (blueprint) {
        return "/test/:testID"
    }

    return `/test/${testID}`

};

