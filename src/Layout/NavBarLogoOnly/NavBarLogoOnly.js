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
                                    <Link to={"/"}> <img className="logo logo-dark" alt="logo" src="/logos/beatest-dark.png"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav id="menu1" className="bar bar-1  bar--absolute bar--transparent">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-2 ">
                                    <div className="bar__module">
                                        <Link to="/">
                                            <img className="logo logo-dark hidden-xs" alt="logo" src="/logos/beatest-dark.png"/>
                                            <img className="logo logo-light hidden-xs hidden-sm" alt="logo" src="/logos/beatest.png"/>
                                        </Link>
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
