import React from "react";
import {Link} from "react-router-dom"

const Error404: React.FC = () => {

    return (
      <div className="container flex justify-center align-center flex-column">
          <h1 className="error__title mt-md">404 Not Fount</h1>
          <Link className="btn btn--primary mt-sm" to="/">Go to Home</Link>
      </div>
    )
}


export default Error404