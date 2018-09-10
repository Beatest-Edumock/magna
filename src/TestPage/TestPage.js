import React from "react";
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import {NavBarWithButtonsContainer} from "../Layout/NavBar/NavBarWithButtons/NavBarWithButtonsContainer";
import 'react-toastify/dist/ReactToastify.css';
import {Button, Col, Container, Jumbotron, Row,TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText } from 'reactstrap';
import {FeatureCard} from "../Common/FeatureCard/FeatureCard";
import {LargeFeatureCard} from "../Common/LargeFeatureCard/LargeFeatureCard";
import Flickity from 'react-flickity-component';
import {MOCK_TESTS_CARD_ELEMENTS,TOPIC_TESTS_CARD_ELEMENTS} from './data';
import {ContactUsContainer} from '../ContactUs/ContactUsForm/ContactUsContainer'
import {Footer} from '../Layout/Footer/Footer'
import classnames from 'classnames';
import {Link} from 'react-router-dom'
import {FlipCard} from "../Common/FlipCard/FlipCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faConnectdevelop, faAmazon} from '@fortawesome/free-brands-svg-icons';
import {faBookOpen, faCheck} from '@fortawesome/free-solid-svg-icons';
import './TestPage.css';

const bodyStyle = {
    background: 'radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)) ,url(/img/landing-3.jpg) no-repeat center',
    backgroundSize: "100% auto",
    filter: 'brightness(200%)'
};


class TestPage extends React.Component {

    state={
      data: ""
    }

    componentWillReceiveProps({data}) {

      this.setState({data: data})

    }

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
                        <TabContent style={{marginBottom: '3%'}} activeTab={this.state.activeTab}>
                          <TabPane tabId="1">
                            <Row style={{marginBottom: '3%',width:'100vw'}}>
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
                            <hr/>
                            <Row style={{justifyContent:'center',width:'100vw'}}> 
                              { (this.state.data) &&

                                  this.state.data.map((object)=>{
                                    return (
                                        object.character=="Mock" &&
                                        <FlipCard
                                        size="small"
                                        front= {
                                                <Container style={{backgroundColor:'#d3d3d3',width:'98%',height:'98%',marginTop:'1%'}}>
                                                  <Container style={{height:250}}>
                                                    <Row style={{padding:100,justifyContent:'center'}}>
                                                      <FontAwesomeIcon size={"10x"} icon={faBookOpen} color="#8C9EFF"/>
                                                    </Row>
                                                  </Container>
                                                  <Container>
                                                  </Container>
                                                </Container>
                                                }
                                        back="hey"  

                                        />
                                    );

                                  })

                              }
                            </Row>
                          </TabPane>
                          <TabPane tabId="2">
                            <Row>
                            <Col sm="12">
                                <Container>
                                  <Row style={{justifyContent:'center',width:'100vw'}}>
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

                </div>
                <Footer/>

            </div>
            </div>
    );
        
    }
}


export {TestPage};


TestPage.propTypes = {
  data : PropTypes.object,

}