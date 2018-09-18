import React from 'react';
import {LoadingScreen} from "./LoadingScreen";
import {QuestionPaletteContainer} from "./components/QuestionPalette/QuestionPaletteContainer";
import {SectionsGroup} from "./components/Section/SectionsGroupContainer";
import {QuestionContent} from "./components/QuestionContent";

class ExamPageUI extends React.Component {

    render() {
        if (this.props.loading)
            return <LoadingScreen/>;
        else {
            return (
                <div className='container-fluid bg-white p-lg-5' style={{minHeight: "100%"}}>
                    <div className="row">
                        <div className="col-lg-10 ">
                            <SectionsGroup/>
                        </div>


                    </div>

                    <div className="row">

                        <div className="col-lg-10">
                            <QuestionContent/>

                        </div>
                        <div className='col-lg-2    '>
                            <QuestionPaletteContainer/>
                        </div>
                    </div>
                </div>

            );

        }
    }
}

export {ExamPageUI}