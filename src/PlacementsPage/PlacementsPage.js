import React from "react";
import PropTypes from 'prop-types';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Button, Col, Container, Jumbotron, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import {MOCK_TESTS_CARD_ELEMENTS, TOPIC_TESTS_CARD_ELEMENTS} from './data';
import {Footer} from '../Layout/Footer/Footer'
import classnames from 'classnames';
import {Link} from 'react-router-dom'
import {FlipCard} from "../Common/FlipCard/FlipCard";
import './PlacementsPage.css';
import {LoginModal} from '../Common/LoginModal/LoginModal'
import {TEST_INSTRUCTIONS_ROUTE} from "../route";
import {PlacementsFormContainer} from "./PlacementsForm/PlacementsFormContainer";

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

    componentWillReceiveProps({data,isUserLoggedIn}) {

        this.setState({data: data})
        console.log(data);
        //console.log(isUserLoggedIn.college_id);

    }

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.showModal = this.showModal.bind(this);
        this.startTest = this.startTest.bind(this);
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

// reroute to /tests/:testID

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

                        <Jumbotron fluid style={bodyStyle}>
                            <Container fluid>

                                <div className='text-center' style={{}}>

                                    <h2 className="text-light display-4">
                                        Placement Exams
                                    </h2>

                                </div>

                            </Container>

                        </Jumbotron>
                        {/*<Container>*/}
                            {/*{*/}
                            {/*(this.props.isUserLoggedIn) && (this.props.isUserLoggedIn.college_id==null) &&*/}
                                    {/*<Row style={{justifyContent: 'center'}}>*/}
                                        {/*<PlacementsFormContainer/>*/}
                                    {/*</Row>*/}
                            {/*}*/}

                            {/*{*/}
                            {/*(this.props.isUserLoggedIn) && (this.props.isUserLoggedIn.college_id!=null) &&*/}
                                    {/*<Row style={{justifyContent: 'center'}}>*/}
                                        {/*<span style={{color: 'blue',fontSize: 24}}>Share this code with your friends</span>*/}
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
                                            return (


                                                <FlipCard
                                                    size="small"
                                                    front={
                                                        <Container className="rounded" fluid={true} style={{
                                                            backgroundColor: '#d3d3d3',

                                                            width: '98%',
                                                            height: '80%',
                                                            marginTop: '1%',
                                                            padding: 0
                                                        }}>
                                                            {/*<Container style={{height: 240}}>
                                                                <Row style={{padding: 100, justifyContent: 'center'}}>
                                                                    <img alt="person" src="/testicons/Available/Algebra.png" style={{maxWidth: '100%'}}/>
                                                                </Row>
                                                            </Container>*/}
                                                            <Container style={{backgroundColor: 'white', width: '100%',height:240}}>
                                                                <Row style={{justifyContent: 'center', alignItems: 'center',height:240}}>
                                                                    <img alt="person" src="/testicons/Available/Algebra.png" style={{padding:0,width: '100%',height:240}}/>
                                                                </Row>
                                                            </Container>
                                                            <Container style={{backgroundColor: 'white', width: '97%', height: 45}}>
                                                                <Row style={{justifyContent: 'center', alignItems: 'center', height: 45}}>
                                                                    <span>{object.name}</span>
                                                                </Row>
                                                            </Container>

                                                        </Container>
                                                    }
                                                    back={(
                                                        <Container>
                                                            <Row style={{
                                                                color: 'white',
                                                                fontSize: 14,
                                                                justifyContent: 'space-between',
                                                                paddingLeft: '10%',
                                                                paddingRight: '10%',
                                                                paddingTop: '10%'
                                                            }}>
                                                                {/*<span>Number of questions</span>*/}
                                                                {/*<span>100</span>*/}

                                                            </Row>
                                                            <Row style={{paddingLeft: '10%', paddingRight: '10%'}}>
                                                                <hr style={{border: '1px solid white', width: '100%'}}/>
                                                            </Row>
                                                            <Row style={{
                                                                color: 'white',
                                                                fontSize: 14,
                                                                justifyContent: 'space-between',
                                                                paddingLeft: '10%',
                                                                paddingRight: '10%',
                                                                paddingTop: '10%'
                                                            }}>
                                                                {/*<span>Time</span>*/}
                                                                {/*<span>60 mins</span>*/}

                                                            </Row>
                                                            <Row style={{paddingLeft: '10%', paddingRight: '10%'}}>
                                                                <hr style={{border: '1px solid white', width: '100%'}}/>
                                                            </Row>
                                                            <Row style={{justifyContent: 'center', padding: '10%'}}>
                                                                {
                                                                    this.props.isUserLoggedIn && (!object.is_purchased && !object.price == 0) &&

                                                                    <Link to=''><Button style={{backgroundColor: 'white', color: 'black'}}>Buy Now</Button></Link>
                                                                }
                                                                {
                                                                    this.props.isUserLoggedIn && (object.is_purchased || object.price == 0) &&
                                                                    <Button onClick={() => this.startTest(object.id)} style={{backgroundColor: 'white', color: 'black'}}>Start
                                                                        Test</Button>
                                                                }

                                                                {
                                                                    !this.props.isUserLoggedIn && (!object.is_purchased && !object.price == 0) &&

                                                                    <Container>
                                                                        <Row style={{justifyContent: 'center'}}>
                                                                            <Button onClick={this.showModal} style={{backgroundColor: 'white', color: 'black'}}>Buy Now</Button>
                                                                        </Row>
                                                                    </Container>

                                                                }
                                                                {
                                                                    !this.props.isUserLoggedIn && (object.is_purchased || object.price == 0) &&

                                                                    <Button onClick={this.showModal} style={{backgroundColor: 'white', color: 'black'}}>Start Test</Button>


                                                                }
                                                            </Row>
                                                        </Container>


                                                    )}
                                                    backBackground={((object.is_purchased || object.price == 0) && "blue") || ((!object.is_purchased && !object.price == 0) && "gray")}

                                                />


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