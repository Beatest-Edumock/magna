import React from 'react';
import PropTypes from 'prop-types';
import './FlipCard.css'

/**
 * The feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function FlipCard(props) {


    return (
        <div className={"flip-container "+ props.size + " rounded"}>
            <div className="flipper">
                <div className={"front "+ props.size + " rounded"}>
                    {props.front}
                </div>
                <div className={"back "+ props.size + " rounded"} style={{backgroundColor: props.backBackground}}>
                    {props.back}
                </div>
            </div>
        </div>

    )

}


export {FlipCard}

FlipCard.propTypes = {

    /** The content to be displayed in the front part of the card */
    front: PropTypes.object,

    /** The content to be displayed in the back of the card */
    back: PropTypes.object

};