import React, {Component} from 'react';
import {changeCurrentSectionAsyncAC} from "../../../../../_Redux/ActionCreators/Test/Sections/Sections-ActionCreator";
import connect from "react-redux/es/connect/connect";
import {SectionButtonUI} from "./SectionButtonUI";


class SectionButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.sectionClickHandler = this.sectionButtonClickHandler.bind(this);

    }

    sectionButtonClickHandler(sectionID) {
        this.props.changeCurrentSection(sectionID)
    }


    render() {
        return <SectionButtonUI
            sectionName={this.props.sectionName}
            disabled={this.props.disabled}
            sectionID={this.props.sectionID}
            isCompleted={this.props.isCompleted}
            sectionCallBack={this.sectionClickHandler} />
    }



}

function mapDispatchToProps(dispatch) {
    return {
        changeCurrentSection: (sectionID) => {
            dispatch(changeCurrentSectionAsyncAC(sectionID));
        }
    }
}


function mapStateToProps(state) {
    return {
        currentSection: state.test.currentSection,
    }

}



const SectionButton = connect(mapStateToProps, mapDispatchToProps)(SectionButtonContainer);

export {SectionButton};