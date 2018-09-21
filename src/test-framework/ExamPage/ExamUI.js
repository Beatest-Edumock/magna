import React from 'react';
import {LoadingSpinner} from "./LoadingSpinner";
import {SectionsGroup} from "./components/Section/SectionsGroupContainer";
import {QuestionContent} from "./components/QuestionContent";
import PropTypes from 'prop-types';
import {QuestionPalette} from "./components/QuestionPalette"

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

                    </div>

                    <div className="row">

                        <div className="col-lg-10 card p-3 py-sm-0 m-sm-3 m-md-0">
                            <QuestionContent/>

                        </div>
                        <div className='col-lg-2    '>
                            <QuestionPalette/>
                        </div>
                    </div>
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