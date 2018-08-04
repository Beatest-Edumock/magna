import React from "react";
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import beatestLogo from "./imgs/beatest.png";
import beatestDarkLogo from "./imgs/beatest-dark.png";


class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            bgColor: this.props.transparent ? "transparent" : 'light'
        };


    }

    toggle() {
        const isOpen = !this.state.isOpen;

        this.setState({
            isOpen: isOpen,
        });
    }


    render() {
        return (
            <div>

                <Navbar color={this.state.bgColor} light expand="md" fixed="top" className="shadow-sm border-bottom border-dark">

                    <Container>
                        <NavbarBrand tag={Link} to="/"> <img src={this.props.lightLogo ? beatestLogo : beatestDarkLogo} height="30"/> </NavbarBrand>

                        {this.props.children &&
                        <div>
                            < NavbarToggler onClick={this.toggle} className="navbar-light"/>

                            <Collapse isOpen={this.state.isOpen} navbar>

                                <Nav className="ml-auto" navbar>
                                    {this.props.children}
                                </Nav>
                            </Collapse>

                        </div>

                        }
                    </Container>

                </Navbar>
            </div>


        );

    }
}


export {NavBar};
