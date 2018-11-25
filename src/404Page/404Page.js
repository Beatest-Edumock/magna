import React from 'react';
import {Link} from "react-router-dom";

function NotFoundPage() {

    return (
        <div className="text-center align-items-center">
            <h1 className="display-1">Page Not Found</h1>
            <Link to={"/"}><h4 className="display-4">Home Page</h4></Link>
        </div>
    )

}


export {NotFoundPage};