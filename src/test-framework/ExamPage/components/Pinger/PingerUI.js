import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';


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

    if (props.timeLeft === 1233) {
        toast.error("10 minutes left!");


    }


    return (

        <div className={`h-100 w-100 py-3 py-md-0 px-1 row justify-content-center align-items-center ${borderColor} border `}>
            <div className=" align-items-center text-center">
                <span className="font-weight-bold">{props.userName}</span>
                <br/>
                Time Left: {moment.utc(props.timeLeft * 1000).format("HH:mm:ss")}
            </div>
        </div>
    );
}

PingerUI.propTypes = {
    timeLeft: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
};
export {PingerUI};