import React from "react";
import PropTypes from 'prop-types';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Col, Container, Jumbotron, Row} from 'reactstrap';
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import {MOCK_TESTS_CARD_ELEMENTS} from './data';
import {Footer} from '../Layout/Footer/Footer'
import './PlacementsPage.css';
import {LoginModal} from '../Common/LoginModal/LoginModal'
import {PERFORMANCE_PAGE_ROUTE, TEST_INSTRUCTIONS_ROUTE} from "../route";
import {TopBannerUI} from "./TopBannerUI";
import {TestCard} from "../Common/TestCard";

const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-3.jpg) no-repeat center',
    backgroundSize: "100% auto",
    filter: 'brightness(200%)'
};


class PlacementsPage extends React.Component {

    state = {
        data: "",
        modal: false,
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

    startTest(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");


        windowReference.location = TEST_INSTRUCTIONS_ROUTE(testID);


    }

    viewScores(testID) {

        let windowReference = window.open("", "_blank", "height=8000, width=8000,status=yes,toolbar=no,menubar=no,location=no");


        windowReference.location = PERFORMANCE_PAGE_ROUTE(testID);


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
                            <Container>


                                <TopBannerUI user={this.props.user}/>


                                {/*TODO make this dynamic*/}
                                {/*<h3 className=" text-center">Rochester Institute of Technology</h3>*/}

                            </Container>
                        </Jumbotron>

                        {/*<Container>*/}
                        {/*{*/}
                        {/*(this.props.isUserLoggedIn) && (this.props.isUserLoggedIn.college_id == null) &&*/}
                        {/*<Row style={{justifyContent: 'center'}}>*/}
                        {/*<PlacementsFormContainer/>*/}
                        {/*</Row>*/}
                        {/*}*/}
                        {/*/!**!/*/}
                        {/*{*/}
                        {/*(this.props.isUserLoggedIn) && (this.props.isUserLoggedIn.college_id != null) &&*/}
                        {/*<Row style={{justifyContent: 'center'}}>*/}
                        {/*<span style={{color: 'blue', fontSize: 24}}>Share this code with your friends</span>*/}
                        {/*</Row>*/}
                        {/*}*/}

                        {/*</Container>*/}

                        <div>
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
                        </div>

                    </div>
                    <Footer/>

                </div>
            </div>
        );

    }
}


export {PlacementsPage};


PlacementsPage.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

}