import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import brokenGuitar from "../../assets/images/broken-guitar.jpg";

const NotFound = () => {
  return (
    <section
      className="
        container w-100 vh-100
        d-flex flex-column justify-content-center align-items-center"
    >
      <div className="row">
        <h1 className="col-12 text-center m-0 p-0">PAGE NOT FOUND</h1>
        <img
          src={brokenGuitar}
          alt="broken guitar"
          className="w-50 col-12 m-auto rounded-circle mt-4"
        />
        <Link to={routes.ENTRY} className="col-12 text-center link-info mt-4">
          Back to Main
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
