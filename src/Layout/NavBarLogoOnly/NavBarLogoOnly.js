/**
 *
 *
 */

import React from "react";
import {Link} from 'react-router-dom'


function NavBarLogoOnly(props) {
    return (
        <div>

            <div className="nav-container">
                <div>
                    <div className="bar bar--sm visible-xs">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 col-md-2">
                                    <Link to={"/"}> <img className="logo logo-dark" alt="logo" src="/logos/beatest.png"/>
                                    </Link>
                                </div>
                                <div className="col-9 col-md-10 text-right">
                                    <a href="#" className="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm">
                                        <i className="icon icon--sm stack-interface stack-menu"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav id="menu1" className="bar bar-1 hidden-xs bar--absolute bar--transparent">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-2 hidden-xs">
                                    <div className="bar__module"><Link to="/">
                                        <img className="logo logo-dark" alt="logo" src="/logos/beatest-dark.png"/> <img
                                        className="logo logo-light" alt="logo" src="/logos/beatest.png"/> </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>


        </div>

    )
}

export default NavBarLogoOnly;
