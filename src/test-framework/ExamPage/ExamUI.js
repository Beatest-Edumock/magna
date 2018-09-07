import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {QuestionPaletteContainer} from "../components/QuestionPalette/QuestionPaletteContainer";
import {SectionsGroup} from "../components/Section/SectionsGroupContainer";

class ExamPageUI extends React.Component {

    render() {
        if (this.props.loading)
            return <LoadingScreen/>;
        else {
            return (
                <div className='container-fluid'>
                    <div>
                    <SectionsGroup/>
                    </div>
                    <div className='container-fluid float-right'>
                        <QuestionPaletteContainer/>
                    </div>

                </div>

            );

        }
    }
}

export {ExamPageUI}