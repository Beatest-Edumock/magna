import React from 'react';
import {UpdateScoreButton} from "./UpdateScoreButton/UpdateScoreButtonContainer";

function UpdateScorePaletteUI(props) {
    const toDisplay = props.testIsComplete;

    return (
        <div>
            {toDisplay &&
            <div className="my-2">
                <div className="alert-success p-2 rounded">Time spent on question <br/>{props.timeSpent} seconds</div>
                <div><kbd>Marks Allotted : {props.maxScore}</kbd></div>
                <div><kbd>Marks Secured : {props.obtainedScore}</kbd></div>
                <div className="my-2">
                    <div className="form-group">
                        <label>Enter New Score :</label>
                        <input type="number" className="form-control" value={props.customInput}
                               onChange={props.onCustomInputChange}/>
                    </div>

                </div>
                <div className="my-2">
                    <UpdateScoreButton
                        testIsComplete={props.testIsComplete}
                        customInput={props.customInput}
                    />
                </div>
            </div>
            }
        </div>

    )

}


export {UpdateScorePaletteUI}