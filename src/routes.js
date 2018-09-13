import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import {ExamPageC} from "./test-framework/ExamPage";
import {history} from "./__internals/CustomHistory";
import {HomePage} from "./HomePage/HomePage"
import {LoginPage} from "./LoginPage/LoginPage"
import {ResendActivationPage} from "./ResendActivationPage/ResendActivationPage"
import {SignUpPage} from "./SignUpPage/SignUpPage";
import {SectionsGroupContainer} from "./test-framework/ExamPage/components/Section/SectionsGroupContainer";
import {TermsPage} from "./TermsPage/TermsPage";
import {AboutUsPage} from "./AboutUsPage/AboutUsPage";
import {TestPageContainer} from "./TestPage";
import {QuestionPaletteContainer} from "./test-framework/ExamPage/components/QuestionPalette/QuestionPaletteContainer";
import {InstructionPage} from "./test-framework/InstructionPage/InstructionPage";

const Routes = () => (
    <Router history={history}>
        <Switch>


            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/resend-activation" component={ResendActivationPage}/>
            <Route path="/test/:testID/instructions" component={InstructionPage}/>
            <Route path="/test/:testID" component={ExamPageC}/>

            <Route exact path="/terms" component={TermsPage}/>
            <Route exact path="/tc" component={QuestionPaletteContainer}/>
            <Route exact path="/about-us" component={AboutUsPage}/>
            <Route exact path="/tests/:testType" component={TestPageContainer}/>

        </Switch>

    </Router>
);


export default Routes;
