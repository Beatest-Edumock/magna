import React from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
import moment from 'moment';


function getTime(seconds) {
    const time = moment.utc(seconds * 1000).format("HH:mm:ss");

    return `Time Left: ${time}`
}

/**
 * Displays the time left along with the name
 * of the user
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function PingerUI(props) {

    let borderColor = props.timeLeft < 600 ? "border-danger" : "border-dark";

    if (props.timeLeft === 600) {
        toast.error("10 minutes left!");
    }


    return (

        <div className={`h-100 w-100 py-3 py-md-0 px-1 row justify-content-center align-items-center ${borderColor} border `
        }>
            <div className=" align-items-center text-center">
                <span className="font-weight-bold">{props.userName}</span>
                <br/>
                {!props.isTestComplete && getTime(props.timeLeft)}
            </div>
        </div>
    );
}

PingerUI.propTypes = {
    timeLeft: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
};
export {PingerUI};