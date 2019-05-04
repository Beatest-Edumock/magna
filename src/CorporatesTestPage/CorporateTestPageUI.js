import React from "react";
import PropTypes from 'prop-types';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Container, Jumbotron, Row} from 'reactstrap';
import {Footer} from '../Layout/Footer/Footer'
import './PlacementsPage.css';
import {LoginModal} from '../Common/LoginModal/LoginModal'
import {PERFORMANCE_PAGE_ROUTE, TEST_INSTRUCTIONS_ROUTE} from "../route";
import {TopBannerUI} from "./TopBannerUI";
import {TestCard} from "../Common/TestCard";
import {history} from "../__internals/CustomHistory";

const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-3.jpg) no-repeat center',
    backgroundSize: "100% auto",
    filter: 'brightness(200%)'
};


class CorporateTestPageUI extends React.Component {

    state = {
        data: "",
        modal: false,
        loginSuccessFul: false
    }

    componentWillReceiveProps({data, isUserLoggedIn}) {

        this.setState({data: data})

    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.showModal = this.showModal.bind(this);
        this.startTest = this.startTest.bind(this);
        this.viewScores = this.viewScores.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                ...this.state,
                activeTab: tab,
                modal: false,
            });
        }
    }

    showModal(testID) {

        this.setState({
            ...this.state,
            modal: true,
            selectedTestID: testID, // the modal popped when user clicked on this test
            loginSuccessFul: false
        });

    }

    startTest(testID) {


        if (navigator.userAgent.includes("SEB")) {

            history.push(TEST_INSTRUCTIONS_ROUTE(testID));
            return;
        }


        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");
        windowReference.location = TEST_INSTRUCTIONS_ROUTE(testID);


    }

    viewScores(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");


        windowReference.location = PERFORMANCE_PAGE_ROUTE(testID);


    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.loginSuccessFul === false && nextState.loginSuccessFul === true) {
            this.startTest(this.state.selectedTestID);
            return false;

        }

        return true;


    };

    render() {
        return (
            <div>
                <div>

                    <NavBarWithButtonsContainer hidePlacements={true}/>
                    {
                        !this.props.isUserLoggedIn &&
                        <LoginModal modal={this.state.modal} onLoginCallback={() => {

                            setTimeout(
                                () => {
                                    this.setState({...this.state, loginSuccessFul: true})
                                }
                                , 1500
                            );


                        }

                        }/>
                    }


                    <div>


                        <Jumbotron fluid className="bg-white">
                            <Container>


                                <TopBannerUI corporate={this.props.corporate}/>


                            </Container>
                        </Jumbotron>


                        <div>


                            <hr/>
                            <Row style={{justifyContent: 'center', marginLeft: 0, marginRight: 0}}>
                                {(this.state.data) &&

                                this.state.data.map((object) => {

                                    let func;


                                    if (this.props.isUserLoggedIn && (object.is_purchased || object.price === 0)) {
                                        func = () => {
                                            this.startTest(object.id);
                                        }


                                    }
                                    if (!this.props.isUserLoggedIn) {
                                        func = () => {
                                            this.showModal(object.id);
                                        }
                                    }

                                    if (object.is_complete) {

                                        func = () => {
                                            // this.viewScores(object.id);
                                        }

                                    }


                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6 px-3 py-5">


                                            <TestCard testDetails={object} onClick={func}/>

                                        </div>
                                    );

                                })

                                }
                            </Row>
                        </div>

                    </div>
                    < Footer / >

                    <
                    /div>
                </div>
                );

                }
                }


                export {CorporateTestPageUI};


                CorporateTestPageUI.propTypes = {
                data: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object
                ]),

            }