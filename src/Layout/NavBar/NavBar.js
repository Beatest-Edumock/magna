import React from "react";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';
import beatestLogo from "./imgs/beatest.png";
import beatestDarkLogo from "./imgs/beatest-dark.png";
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import { withRouter } from 'react-router';


/**
 * Navbar Component for the entire website.
 *
 */
class NavBar1 extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    state = {
        isOpen: false,
        bgColor: this.props.transparent ? "transparent" : 'light',
    };

    /**
     * Inverts state when bootstrap's toggler is active (for small screens)
     */
    toggle() {
        const isOpen = !this.state.isOpen;

        this.setState({
            isOpen: isOpen,
        });
    }


    render() {

        return (

            <Navbar color={this.state.bgColor} light expand="md" sticky="top" className="shadow py-0 border-dark ">

                <Container>
                    <NavbarBrand tag={this.props.location.pathname=="/" ? 'div' : Link} to={this.props.location.pathname=="/" ? "" : ""} active={false}> <img src={this.props.lightLogo ? beatestLogo : beatestDarkLogo} height="45"/> </NavbarBrand>

                    {!this.props.logoOnly &&
                    <div>
                        <NavbarToggler onClick={this.toggle} className="navbar-light"/>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                {this.props.children}
                            </Nav>
                        </Collapse>

                    </div>

                    }
                </Container>

            </Navbar>


        );

    }
}


NavBar1.propTypes = {
    /**
     * Display nothing except Logo (on the left).
     * Setting this will hide all buttons ,links etc on the navbar.
     *
     * If the Navbar has children, enabling this option will display them.
     */
    logoOnly: PropTypes.bool,


    /**
     * Set the navbar to transparent.
     * Otherwise it will be bootstrap's light color
     */
    transparent: PropTypes.bool,

    /**
     * If set ,  Beatest's light logo will be used.
     * Otherwise the dark logo will be used.
     */
    lightLogo: PropTypes.bool

};

const NavBar = withRouter(NavBar1)
export {NavBar};
