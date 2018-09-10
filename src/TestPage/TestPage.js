import React from "react";
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Col, Container, Jumbotron, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import {MOCK_TESTS_CARD_ELEMENTS, TOPIC_TESTS_CARD_ELEMENTS} from './data';
import {Footer} from '../Layout/Footer/Footer'
import classnames from 'classnames';
import './TestPage.css';

const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-1.jpg) no-repeat center',
    backgroundSize: "100% auto",
};


class TestPage extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
      }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }

    render(){
        return (
            <div>
            <div>

                <NavBarWithButtonsContainer/>


                <div>

                    <Jumbotron fluid style={bodyStyle}>
                        <Container fluid>

                            <div className='text-center' style={{}}>

                                <h2 className="text-light display-4">
                                    Tests
                                </h2>
                            </div>

                        </Container>

                    </Jumbotron>
                    <div>
                        <Nav tabs style={{width: '100%',justifyContent:'center',borderBottom:0,marginBottom: '2%',marginTop: '6%'}}>
                          <NavItem>
                            <NavLink
                              style={{borderColor: '#dee2e6'}}
                              className={classnames({ active: this.state.activeTab === '1' })}
                              onClick={() => { this.toggle('1'); }}
                            >
                              Mock  Tests
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              style={{borderColor: '#dee2e6'}}
                              className={classnames({ active: this.state.activeTab === '2' })}
                              onClick={() => { this.toggle('2'); }}
                            >
                              Topic Tests
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="1">
                            <Row>
                              <Col sm="12">
                                <Container>
                                  <Row style={{justifyContent:'center'}}>
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
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                            <Col sm="12">
                                <Container>
                                  <Row style={{justifyContent:'center'}}>
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
                          </TabPane>
                        </TabContent>
                    </div>
                    <div className="container-fluid no-gutters">
                        <div className="row justify-content-center" style={{flexWrap: 'wrap'}}>

                        </div>
                    </div>

                    <Container fluid className='bg-light border-top' style={{paddingBottom: '2%'}}>

                        <h1 className="text-center" style={{paddingTop: '2%'}}> Our Features</h1>

                <Container>
                <Row style={{justifyContent:'center'}}>
     
                </Row>
                </Container>

                    </Container>

                </div>
                <div style={{paddingTop: '60px', paddingBottom: '60px'}}>
                    <span style={{
                        fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
                        textAlign: 'center',
                        display: 'block',
                        paddingBottom: '32px',
                        fontSize: '32px'
                    }}>STUDENT PARTNERS</span>
                </div>
                <div style={{paddingTop: '60px', paddingBottom: '60px', backgroundColor: 'black', color: 'white'}}>
                </div>

                <div style={{paddingTop: '60px', paddingBottom: '60px'}}>
                    <span
                        style={{fontFamily: 'Open Sans,Helvetica,Arial,sans-serif', textAlign: 'center', display: 'block', paddingBottom: '32px', fontSize: '32px'}}>RECOGNITIONS</span>
                </div>
                <Footer/>

            </div>
            </div>
    );
        
    }
}


export {TestPage};


