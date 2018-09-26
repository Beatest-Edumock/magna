import React from 'react';
import {TITAKeyPad} from "./TITAKeyPad";

function TITAUI(props) {
    return(
        <div>
            <div className="max-w-100-md scroll-x-auto">
                <div className="" dangerouslySetInnerHTML={{__html: props.questionHtml}}/>
            </div>
            <div className="col-lg-4">
                <TITAKeyPad localValue={props.localValue}
                            tita_choice={props.tita_choice}
                            handleValueUpdate={props.handleValueUpdate}
                            handleSubmit={props.handleSubmit}
                            handleBackSpace={props.handleBackSpace}
                            />
                </div>
        </div>
        )
}
export {TITAUI}