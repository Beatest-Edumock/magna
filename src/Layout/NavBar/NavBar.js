import React from "react";
import {Container, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';

// function LoginProfileSignupButton(props) {
//     /**
//      * The text and links of the two buttons
//      * depends on the fact that the user is logged in or not.
//      *
//      * @type {string}
//      */
//
//     const profileLoginText = props.isLoggedIn ? "Profile" : "Login";
//     const profileLoginLink = props.isLoggedIn ? "/profile" : "/login";
//
//     const signupLogoutText = props.isLoggedIn ? "Logout" : "Sign Up";
//
//     return (
//
//         <div className="bar__module">
//
//             <a className="btn btn--sm btn--primary type--uppercase" onClick={() => {
//                 history.push(profileLoginLink)
//             }}>
//                 <span className="btn__text"> {profileLoginText}</span>
//             </a>
//
//             <a className="btn btn--sm type--uppercase" onClick={() => {
//
//                 if (props.isLoggedIn) {
//                     LogoutUserApi().then(() => {
//                         toast.success("Successfully Logged Out");
//                         props.removeUserAction();
//                     });
//                 }
//
//             }}> <span
//                 className="btn__text"> {signupLogoutText} </span>
//             </a>
//         </div>
//     )
// }

class NavBar extends React.Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            bgColor: 'transparent'
        };


    }

    toggle() {
        const isOpen = !this.state.isOpen;

        this.setState({
            isOpen: isOpen,
            bgColor: isOpen ? "dark" : "transparent"
        });
    }


    render() {
        return (

            <Navbar color={this.state.bgColor} light expand="md" fixed='top' className="shadow-lg">


                <Container>

                    <NavbarBrand tag={Link} to="/">
                        <img src={this.props.lightLogo ? "/logos/beatest.png" : "/logos/beatest-dark.png"} height="60"></img>
                    </NavbarBrand>


                    {this.props.children &&
                    < div>
                        < NavbarToggler onClick={this.toggle} className="navbar-dark"/>

                        <Collapse isOpen={this.state.isOpen} navbar>

                            <Nav className="ml-auto" navbar>
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


export {NavBar};
