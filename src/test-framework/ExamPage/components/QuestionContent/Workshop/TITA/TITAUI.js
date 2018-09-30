import React from 'react';
import {TITAKeyPad} from "./TITAKeyPad";

function TITAUI(props) {
    return(
        <div>
            <div className="max-w-100-md scroll-x-auto">
                <div className="" dangerouslySetInnerHTML={{__html: props.questionHtml}}/>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-4 offset-md-0 col-sm-4 offset-sm-4 col-6 offset-3">
                <TITAKeyPad localValue={props.localValue}
                            tita_choice={props.tita_choice}
                            handleValueUpdate={props.handleValueUpdate}
                            handleSubmit={props.handleSubmit}
                            handleBackSpace={props.handleBackSpace}
                            isComplete={props.isComplete}
                            titaAnswer={props.titaAnswer}
                            />
                </div>
        </div>
        )
}
export {TITAUI}