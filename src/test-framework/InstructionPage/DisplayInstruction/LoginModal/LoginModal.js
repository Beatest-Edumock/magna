import React from 'react';
import {Modal, ModalBody, ModalHeader} from 'reactstrap';
import {LoginFormContainer} from "../../../../LoginPage/LoginForm/LoginFormContainer";
import {UserActions} from "../../../../Common/UserActions";

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({modal: nextProps.modal});
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <LoginFormContainer shouldAutoDirect={false} onLoginCallback={() => {
                            console.log("HMMMMMM");

                            this.props.onLoginCallback();
                        }}/>
                    </ModalBody>

                    <div className='text-center my-2'>
                        <UserActions textColor="text-dark"/>
                    </div>

                </Modal>
            </div>
        );
    }
}

export {LoginModal}