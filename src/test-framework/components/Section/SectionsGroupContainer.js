import React, {Component} from 'react';
import {SectionsGroupUI} from "./SectionsGroupUI";
import connect from "react-redux/es/connect/connect";

class SectionsGroupContainer extends Component {

    constructor(props) {
        super(props);
        this.changeSection = this.changeSectionHandleClick.bind(this);

    }

    changeSectionHandleClick (sectionID) {
        console.log(sectionID)
    }

    render() {

        const sectionList = Object.keys(this.props.sections).map(
            (key) => {
                return this.props.sections[key]
            }
        );
        console.log(sectionList);

        return (
            <SectionsGroupUI sections={sectionList} sectionFunc={this.changeSection} />
        )
    }
}


function mapStateToProps(state) {
    return {
        sections: state.test.sections,
        currentSection: state.test.currentSection,
    }

}

const SectionsGroup = connect(mapStateToProps, null)(SectionsGroupContainer);
export {SectionsGroup}