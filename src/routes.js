import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import {ExamPageC} from "./test-framework/ExamPage";
import {history} from "./__internals/CustomHistory";
import {Homepage} from "./HomePage/HomePage"
import {LoginPage} from "./LoginPage/LoginPage"
import {ResendActivationPage} from "./ResendActivationPage/ResendActivationPage"
import {SignUpPage} from "./SignUpPage/SignUpPage";
import {TermsPage} from "./TermsPage/TermsPage";
import {AboutUsPage} from "./AboutUsPage/AboutUsPage";
import {TestPageContainer} from "./TestPage";
import {PlacementsPageContainer} from "./PlacementsPage";
import {InstructionPage} from "./test-framework/InstructionPage/InstructionPage";
import {
    ABOUT_US_ROUTE,
    LOGIN_ROUTE,
    RESEND_ACTIVATION_ROUTE,
    ROOT_ROUTE,
    SIGNUP_ROUTE,
    REFERRAL_SIGNUP_ROUTE,
    TERMS_AND_CONDS_ROUTE,
    TEST_INSTRUCTIONS_ROUTE,
    TEST_LIST_ROUTE,
    TEST_PAGE_ROUTE,
    PLACEMENTS_PAGE_ROUTE, PERFORMANCE_PAGE_ROUTE, FORGOT_PASSWORD_ROUTE, RESET_PASSWORD_ROUTE

} from "./route";
import {PerformancePageContainer} from "./test-framework/PerformancePage";
import {NotFoundPage} from "./404Page/404Page";
import {ForgotPassword} from "./ForgotPasswordPage/ForgotPassword";
import {ResetPassword} from "./ResetPasswordPage/ResetPassword";


const Routes = () => (
    <Router history={history}>
        <Switch>


            <Route exact path={ROOT_ROUTE()} component={Homepage}/>
            <Route exact path={LOGIN_ROUTE()} component={LoginPage}/>
            <Route exact path={SIGNUP_ROUTE()} component={SignUpPage}/>
            <Route exact path={REFERRAL_SIGNUP_ROUTE(null, true)} component={SignUpPage}/>
            <Route exact path={RESEND_ACTIVATION_ROUTE()} component={ResendActivationPage}/>

            <Route exact path={FORGOT_PASSWORD_ROUTE()} component={ForgotPassword}/>
            <Route exact path={RESET_PASSWORD_ROUTE()} component={ResetPassword}/>

            <Route exact path={TERMS_AND_CONDS_ROUTE()} component={TermsPage}/>
            <Route exact path={ABOUT_US_ROUTE()} component={AboutUsPage}/>
            <Route exact path={TEST_LIST_ROUTE(null, true)} component={TestPageContainer}/>

            <Route exact path={TEST_PAGE_ROUTE(null, true)} component={ExamPageC}/>
            <Route exact path={PLACEMENTS_PAGE_ROUTE()} component={PlacementsPageContainer}/>


            <Route exact path={TEST_INSTRUCTIONS_ROUTE(null, true)} component={InstructionPage}/>
            <Route exact path={PERFORMANCE_PAGE_ROUTE(null, true)} component={PerformancePageContainer}/>

            <Route component={NotFoundPage}/>

        </Switch>

    </Router>
);


export default Routes;
