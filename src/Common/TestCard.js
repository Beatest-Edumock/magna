import React from 'react';
import { toast } from 'react-toastify';
import {createOrder} from "../_Api/Payments";
import {createRazorPayOrder} from "../Payment/RazorpayCheckout";

let asUserID = (new URL(document.location)).searchParams.get("asUser");
let testD;

function buyTest() {
     let order = createOrder(testD);
     let options = {
        "key": "rzp_live_IIFiNTCfcQrA0Z",
        "amount": (testD.price * 100), // 2000 paise = INR 20, amount in paisa
        "name": "Beatest",
        "description": testD.name,
        "image": "../../public/beatest.ico",
        "order_id" : order.rp_order_id,
        "handler": function (response){
          alert("Success : Payment Done");
          window.location.reload();
        },
        "prefill": {
          "name": "Beatest",
          "email": " "
        },
        "theme": {
          "color": "#1771D7"
        }
      };
    let rzp =new window.Razorpay(options);
    rzp.open(); 
}


/**
 * Handles a single card display
 *
 * @param testDetails a single test object returned from get tests endpoint
 * @param onClick the callback when the button is clicked
 */

function TestCard({testDetails, onClick}) {

    let totalTime = testDetails.total_time;

    if (testDetails.allow_section_jumps ) {
        totalTime = testDetails.total_time / testDetails.section_count;

    }
    totalTime = totalTime / 3600;
    totalTime = Math.floor(totalTime * 100) / 100

    const hasAccess = testDetails.is_purchased || testDetails.price === 0;


    let buttonText = "Start Test";
    let buttonColor = "btn-primary";

    testD = testDetails;

    if (hasAccess !== true) {
        if(testDetails.status === "created" || testDetails.status === "attempted") {
            //TODO Capturing Payments
        } else {
                buttonText = "Buy Now";
                buttonColor = "btn-success";
                onClick = buyTest;
        }
    }

    if (testDetails.is_complete === true) {
        buttonColor = "btn-info";
        buttonText = "View Scores";
    }

    return (
        <div className="card shadow-sm">
            <div className="row h-100 no-gutters">

                <div className="col-12  bg-light">

                    <div className="card-header shadow-sm d-flex align-items-center justify-content-start bg-orange ">
                        <i className="fa fa-camera-retro fa-5x text-black"/>
                        <img height="25px" width="auto" src={testDetails.logo}/>

                    </div>

                    <div className="card-body text-secondary">
                        <div>
                            <h4 className="card-title text-success ">{testDetails.name}</h4>
                            {/*<p className="d-inline bg-danger p-1 text-white text-weight-bold">Ending Soon</p>*/}
                        </div>
                        <hr/>

                        <div className="row no-gutters">
                            <div className="col-4">
                                <h3 className="display-5 d-inline align-middle text-danger">{totalTime}</h3>
                                <p className="align-middle ">Hours</p>
                            </div>

                            <div className="col-4">
                                <h3 className="display-5 d-inline align-middle text-warning">{testDetails.section_count}</h3>
                                <p className="align-middle">Sections</p>
                            </div>

                            <div className="col-4">
                                <h3 className="display-5 d-inline align-middle text-secondary">{testDetails.question_count}</h3>
                                <p className="align-middle">Questions</p>
                            </div>
                        </div>

                    </div>

                    <button onClick={onClick} className={`btn btn-block ${buttonColor}  rounded btn-lg`}>
                        {buttonText}
                    </button>

                </div>

            </div>
        </div>

    );

}


export {TestCard};