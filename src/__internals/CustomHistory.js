/**
 *
 * Required for arbitrary react router redirects without
 * rending components.
 *
 * Taken from https://stackoverflow.com/a/45849608/2670775
 *
 *
 * To redirect from anywhere (E.g. from inside an action creator,
 * or after an api request),
 * do:
 *
 * import history from '__internals/CustomHistory'
 *
 * and then from somewhere inside any function,
 * do
 *
 * history.push("/some_url");
 */


import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

export {history};