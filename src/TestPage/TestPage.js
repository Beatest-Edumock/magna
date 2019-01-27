import React from "react";
import PropTypes from 'prop-types';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Col, Container, Jumbotron, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import {MOCK_TESTS_CARD_ELEMENTS, TOPIC_TESTS_CARD_ELEMENTS} from './data';
import {Footer} from '../Layout/Footer/Footer'
import classnames from 'classnames';
import './TestPage.css';
import {LoginModal} from '../Common/LoginModal/LoginModal'
import {PERFORMANCE_PAGE_ROUTE, TEST_INSTRUCTIONS_ROUTE} from "../route";
import {TestCard} from "../Common/TestCard";


class TestPage extends React.Component {

    state = {
        data: "",
        modal: false,
    };

    componentWillReceiveProps({data}) {

        this.setState({data: data});

    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.showModal = this.showModal.bind(this);
        this.startTest = this.startTest.bind(this);
        this.viewScores = this.viewScores.bind(this);
        this.viewPerformance = this.viewPerformance.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
                modal: false,
            });
        }
    }

    showModal() {
        this.setState({
            modal: true,
        });

    }

    viewScores(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");


        windowReference.location = PERFORMANCE_PAGE_ROUTE(testID);


    }

    viewPerformance(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");

        windowReference.location = PERFORMANCE_PAGE_ROUTE(testID);
    }

    startTest(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");


        windowReference.location = TEST_INSTRUCTIONS_ROUTE(testID);


    }

    render() {
        return (
            <div>
                <div>

                    <NavBarWithButtonsContainer/>
                    {
                        !this.props.isUserLoggedIn &&
                        <LoginModal modal={this.state.modal}/>
                    }
                    <div>

                        <Jumbotron fluid className="bg-white">
                            <Container fluid>

                                <h1 className="display-4 text-center">Exams</h1>
                                <hr/>

                            </Container>

                        </Jumbotron>
                        <div>
                            <Nav tabs style={{width: '100%', justifyContent: 'center', borderBottom: 0, marginBottom: '2%', marginTop: '6%'}}>
                                <NavItem>
                                    <NavLink
                                        style={{borderColor: '#dee2e6'}}
                                        className={classnames({active: this.state.activeTab === '1'})}
                                        onClick={() => {
                                            this.toggle('1');
                                        }}
                                    >
                                        Mock Tests
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        style={{borderColor: '#dee2e6'}}
                                        className={classnames({active: this.state.activeTab === '2'})}
                                        onClick={() => {
                                            this.toggle('2');
                                        }}
                                    >
                                        Topic Tests
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent style={{marginBottom: '3%'}} activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row style={{marginBottom: '3%', marginLeft: 0, marginRight: 0}}>
                                        <Col sm="12">
                                            <Container>
                                                <Row style={{justifyContent: 'center'}}>
                                                    {
                                                        MOCK_TESTS_CARD_ELEMENTS.map((feature_card) => {
                                                            return (
                                                                <LargeFeatureCard
                                                                    fullWidthSize="col-lg-4"
                                                                    icon={feature_card.icon}
                                                                    text={feature_card.text}
                                                                />


                                                            );
                                                        })
                                                    }
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row style={{justifyContent: 'center', marginLeft: 0, marginRight: 0}}>
                                        {(this.state.data) &&

                                        this.state.data.map((object) => {


                                            if (object.character !== "Mock")
                                                return;

                                            let func;


                                            if (this.props.isUserLoggedIn && (object.is_purchased || object.price === 0)) {
                                                func = () => {
                                                    this.startTest(object.id);
                                                }


                                            }
                                            if (!this.props.isUserLoggedIn) {
                                                func = () => {
                                                    this.showModal();
                                                }
                                            }

                                            if (object.is_complete) {

                                                func = () => {
                                                    this.viewScores(object.id);
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
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row style={{marginBottom: '3%', marginLeft: 0, marginRight: 0}}>
                                        <Col sm="12">
                                            <Container>
                                                <Row style={{justifyContent: 'center'}}>
                                                    {
                                                        TOPIC_TESTS_CARD_ELEMENTS.map((feature_card) => {
                                                            return (
                                                                <LargeFeatureCard
                                                                    fullWidthSize="col-lg-4"
                                                                    icon={feature_card.icon}
                                                                    text={feature_card.text}
                                                                />


                                                            );
                                                        })
                                                    }
                                                </Row>
                                            </Container>
                                        </Col>

                                    </Row>

                                    <hr/>
                                    <Row style={{justifyContent: 'center', marginLeft: 0, marginRight: 0}}>
                                        {(this.state.data) &&

                                        this.state.data.map((object) => {

                                            if (object.character !== "Topic")
                                                return;

                                            let func;


                                            if (this.props.isUserLoggedIn && (object.is_purchased || object.price === 0)) {
                                                func = () => {
                                                    this.startTest(object.id);
                                                }


                                            }
                                            if (!this.props.isUserLoggedIn) {
                                                func = () => {
                                                    this.showModal();
                                                }
                                            }

                                            if (object.is_complete) {

                                                func = () => {
                                                    this.viewScores(object.id);
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
                                </TabPane>
                            </TabContent>
                        </div>

                    </div>
                    <Footer/>

                </div>
            </div>
        );

    }
}


export {TestPage};


TestPage.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

};