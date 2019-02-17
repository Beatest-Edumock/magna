import React from 'react';
import {UpdateScoreButton} from "./UpdateScoreButton/UpdateScoreButtonContainer";

function UpdateScorePaletteUI(props) {
    const toDisplay = props.testIsComplete;

    return (
        <div>
            {toDisplay &&
            <div className="my-2">
                <div><kbd>Marks Allotted : XX</kbd></div>
                <div><kbd>Marks Secured : YY</kbd></div>
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