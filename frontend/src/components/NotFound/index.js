import React from "react";
import './index.scss'
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div className="not-found">
        <div className="not-found__content">
            <img
                src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788955.jpg?size=626&ext=jpg"
                alt="Not Found"
                className="not-found__image"
            />
            <div>
                <Link to="/" className="not-found__home-btn">
                    Go to Home
                </Link>
            </div>
        </div>
    </div>
}

export default NotFound