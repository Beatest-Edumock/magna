import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {TestSubmitButtonUI} from "./TestSubmitButtonUI";
import {submitTestAsyncAc} from "../../../../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";
import {submitCurrentSectionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Sections-ActionCreator";

class TestSubmitButtonContainer extends Component {

    constructor(props) {
        super(props)
        this.handleTestSubmitCallBack = this.handleTestSubmit.bind(this)
        this.shouldDisplay = this.shouldDisplay.bind(this)
    }

    shouldDisplay() {
        const sectionsArray = Object.keys(this.props.sections).sort();
        // FIXME
        if (this.props.testType !== "CAT" && (!this.props.testIsComplete)) {
            return true;
        }
        else {
            if(this.props.testIsComplete) {
                return false
            } else {
                // disable for last sections
                return (this.props.currentSection === sectionsArray[sectionsArray.length - 1])
            }
        }
    }

    handleTestSubmit() {

        if(this.props.testType === "CAT") {
            this.props.submitSection()
        }
        this.props.submitTest();
    }

    render() {

        return (
            <TestSubmitButtonUI
                testSubmitCallback={this.handleTestSubmitCallBack}
                shouldDisplay={this.shouldDisplay()}
            />

        )
    }

}

function mapStateToProps(state) {
    return {
        testID: state.test.id,
        currentSection: state.test.currentSection,
        sections: state.test.sectionsByID,
        testType: state.test.type,
        testIsComplete: state.test.is_complete,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitTest: () => {
            dispatch(submitTestAsyncAc());
        },
        submitSection: ()=> {
            dispatch(submitCurrentSectionAsyncAC())

        }
    }
}

const TestSubmitButton = connect(mapStateToProps, mapDispatchToProps)(TestSubmitButtonContainer);

export {TestSubmitButton}



