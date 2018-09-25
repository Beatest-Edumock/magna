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
                             currentSection={this.props.currentSection} />
        )
    }
}


function mapStateToProps(state) {
    return {
        sectionsByID: state.test.sectionsByID,
        currentSection: state.test.currentSection,
    }

}

const SectionsGroup = connect(mapStateToProps, null)(SectionsGroupContainer);
export {SectionsGroup}