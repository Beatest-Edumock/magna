import React from 'react';
import PropTypes from 'prop-types';
import {Card, Container} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faCoffee, faCompactDisc, faCode, faSpinner, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import './FlipCard.css'

/**
 * The feature cards that receive icon and text as props and need to be placed in a row component for them to work properly.
 */

function FlipCard(props) {


    return (
        <div className="flip-container">
            <div className="flipper">
                <div className="front">
                    {props.front}
                </div>
                <div className="back">
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