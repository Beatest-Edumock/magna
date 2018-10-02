import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {SectionSubmitButtonUI} from "./SectionSubmitButtonUI";
import {submitCurrentSectionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Sections-ActionCreator";

class SectionSubmitButtonContainer extends Component {

    constructor(props) {
        super(props)
        this.handleSubmitSectionCallBack = this.handleSubmitSection.bind(this)
        this.shouldDisplay = this.shouldDisplay.bind(this)
    }

    handleSubmitSection() {
        this.props.submitSection()
    }


    shouldDisplay() {
        console.log(this.props.sections)

        const sectionsArray = Object.keys(this.props.sections).sort();

        // FIXME: jumpable types then no submit section
        if (this.props.testType !== "CAT" || this.props.testIsComplete)
            return false;
        else {
            // disable for last sections
            return (this.props.currentSection !== sectionsArray[sectionsArray.length - 1])
        }

    }

    render() {



        return (
            <SectionSubmitButtonUI
                testType={this.props.testType}
                submitSectionCallBack={this.handleSubmitSectionCallBack}
                shouldDisplay={this.shouldDisplay()}
            />
        )
    }

}

function mapStateToProps(state) {

    return {
        testType: state.test.type,
        currentSection: state.test.currentSection,
        sections: state.test.sectionsByID,
        testIsComplete: state.test.is_complete,

    }

}

function mapDispatchToProps(dispatch) {

    return {
        submitSection: ()=> {
            dispatch(submitCurrentSectionAsyncAC())
        }
    }
}


const SectionSubmitButton = connect(mapStateToProps, mapDispatchToProps)(SectionSubmitButtonContainer);
export {SectionSubmitButton}