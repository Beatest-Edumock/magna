import React from 'react';

import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {history} from "../../../../__internals/CustomHistory";


class ErrorModalUI extends React.Component {


    state = {
        time: 5
    };

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.shouldShow && !this.props.shouldShow) {


            setInterval(() => {
                this.setState((prevState) => ({
                    time: prevState.time - 1
                }))

            }, 1000);


            setTimeout(() => {

                    if (navigator.userAgent.includes("SEB")) {

                        history.go(-2);
                    }
                    else {

                        if (window.opener) {
                            window.opener.location.reload(true);
                            window.close();
                        }
                    }
                }
                , 5000);
        }

        return true;
    }


    render() {

        return (
            <Modal isOpen={this.props.shouldShow} backdrop={true}>
                <ModalHeader> <span className="text-danger">An error occurred</span></ModalHeader>

                <ModalBody>
                    Your progress so far has been recorded.
                    You will be redirected automatically in {this.state.time} seconds.
                    You can restart the test by clicking on "Start Test"
                </ModalBody>

            </Modal>
        )
    }

}


export {
    ErrorModalUI
};