import React from 'react';

import {Modal, ModalBody, ModalHeader} from 'reactstrap';


function ErrorModalUI(props) {

    return (
        <Modal isOpen={props.shouldShow} backdrop={true}>
            <ModalHeader> <span className="text-danger">An error occurred</span></ModalHeader>

            <ModalBody>
                Your progress so far has been recorded.
                You may close the test window.
            </ModalBody>

        </Modal>
    )

}


export {ErrorModalUI};