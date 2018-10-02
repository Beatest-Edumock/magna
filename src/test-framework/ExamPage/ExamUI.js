import React from 'react';
import {LoadingSpinner} from "./LoadingSpinner";
import {SectionsGroup} from "./components/Section/SectionsGroupContainer";
import {QuestionContent} from "./components/QuestionContent";
import PropTypes from 'prop-types';
import {QuestionPalette} from "./components/QuestionPalette"
import {Pinger} from "./components/Pinger";
import {ErrorModal} from "./components/ErrorModal";
import {ClearResponseButton} from "./components/QuestionButtonsGroup/ClearResponseButton";
import {MarkForReviewButton} from "./components/QuestionButtonsGroup/MarkForReviewButton";
import {Logic} from "./components/QuestionContent/Workshop/Logic";
import {NextQuestionButton} from "./components/QuestionButtonsGroup/NextQuestionButton";


class ExamPageUI extends React.Component {

    render() {
        if (this.props.loading)
            return <LoadingSpinner/>;
        else {
            return (
                <div className='container-fluid bg-white p-x-lg-5' style={{minHeight: "100%"}}>

                    <div className="row bg-gray-light rounded ">
                        <div className="col-lg-10">
                            <SectionsGroup/>
                        </div>

                        <div className="sticky-top bg-white col-lg-2 align-items-center justify-content-center d-flex  py-3 py-lg-0 order-first  order-lg-last">
                            <Pinger/>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-10 p-3 py-sm-0  m-md-0">
                            <QuestionContent/>
                            <Logic/>

                            <div className="container-fluid">
                                <div className="row ">

                                    <div className="col-12 col-md-3 my-2 ">
                                        <MarkForReviewButton/>
                                    </div>


                                    <div className="col-12 col-md-1 my-2 ">

                                        <NextQuestionButton/>

                                    </div>


                                    <div className="col-12 col-md-3 my-2 ml-md-auto">
                                        <ClearResponseButton/>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div className='col-lg-2 '>
                            <QuestionPalette/>
                        </div>
                    </div>


                    <ErrorModal/>
                </div>

            );

        }
    }
}

ExamPageUI.propTypes = {
    /**
     * If the loading spinner should be displayed instead of the actual
     * exam page
     */
    loading: PropTypes.bool
};

export {ExamPageUI}