import React, {Component} from 'react';
import {SectionsGroupUI} from "./SectionsGroupUI";
import connect from "react-redux/es/connect/connect";

// import {changeCurrentSectionAsyncAC} from "../../../../_Redux/ActionCreators/Test/Sections-ActionCreator";

class SectionsGroupContainer extends Component {


    render() {

        const sectionList = Object.keys(this.props.sectionsByID).sort().map(
            (key, index) => {
                return this.props.sectionsByID[key]
            }
        );

        return (
            <SectionsGroupUI sections={sectionList}
                             currentSection={this.props.currentSection}
                             isComplete={this.props.isComplete}
                             allowJumps={this.props.allowJumps}
            />
        )
    }
}


function mapStateToProps(state) {
    return {
        sectionsByID: state.test.sectionsByID,
        currentSection: state.test.currentSection,
        isComplete: state.test.is_complete,
        allowJumps: state.test.type !== "CAT" // FIXME remove hardcoded string

    }

}

const SectionsGroup = connect(mapStateToProps, null)(SectionsGroupContainer);
export {SectionsGroup}