import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {TestSubmitButtonUI} from "./TestSubmitButtonUI";
import {finishTestAPI} from "../../../../../_Api/Tests/TestAttempts";
import {markTestCompleteAC} from "../../../../../_Redux/ActionCreators/Test/TestAttempt-ActionCreators";
import {history} from "../../../../../__internals/CustomHistory";

class TestSubmitButtonContainer extends Component{

    constructor(props) {
        super(props)
        this.handleTestSubmitCallBack = this.handleTestSubmit.bind(this)
        this.shouldDisplay = this.shouldDisplay.bind(this)
    }

    shouldDisplay () {
        console.log(this.props.sections)
        const sectionsArray = Object.keys(this.props.sections).sort();
        // FIXME
        if (this.props.testType !== "CAT")
        {
            return true;
        }
        else {

            // disable for last sections
            return (this.props.currentSection === sectionsArray[sectionsArray.length - 1])
        }
    }

    handleTestSubmit() {
        finishTestAPI(this.props.testID)
            .then
        (
            this.props.markTestComplete(),
            window.close()

    )}

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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        markTestComplete: ()=> {
            dispatch(markTestCompleteAC())
        }
    }
}

const TestSubmitButton = connect(mapStateToProps, mapDispatchToProps)(TestSubmitButtonContainer);

export {TestSubmitButton}



