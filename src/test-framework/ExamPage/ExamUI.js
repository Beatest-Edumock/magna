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
                <div className='container-fluid bg-light' style={{height: "100%"}}>
                    <div className="row">
                        <div className="col-lg-10 ">
                            <SectionsGroup/>
                        </div>

                        <div className='col-lg-2 '>
                            <div style={{minHeight: "15%"}}></div>
                            <QuestionPaletteContainer/>
                        </div>

                    </div>

                </div>

            );

        }
    }
}

export {ExamPageUI}