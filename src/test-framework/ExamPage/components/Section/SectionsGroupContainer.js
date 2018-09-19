import React, {Component} from 'react';
import {SectionsGroupUI} from "./SectionsGroupUI";
import connect from "react-redux/es/connect/connect";
import {changeCurrentSectionAC} from "../../../../_Redux/ActionCreators/Test/Sections-ActionCreator";

class SectionsGroupContainer extends Component {

    constructor(props) {
        super(props);
        this.changeSection = this.changeSectionHandleClick.bind(this);

    }

    changeSectionHandleClick(sectionID) {
        this.props.changeCurrentSection(sectionID)
    }

    render() {

        const sectionList = Object.keys(this.props.sectionsByID).sort().map(
            (key, index) => {
                return this.props.sectionsByID[key]
            }
        );



        return (
            <SectionsGroupUI sections={sectionList} sectionFunc={this.changeSection}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentSection: (sectionID) => {

            dispatch(changeCurrentSectionAC(sectionID));

        }
    }
}

function mapStateToProps(state) {
    return {
        sectionsByID: state.test.sectionsByID,
        currentSection: state.test.currentSection,
    }

}

const SectionsGroup = connect(mapStateToProps, mapDispatchToProps)(SectionsGroupContainer);
export {SectionsGroup}