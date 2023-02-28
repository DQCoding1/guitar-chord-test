import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./EntryPage.css";

const EntryPage = () => {
  return (
    <section className="
      section-entry
      d-flex flex-column justify-content-center align-items-center gap-5
      w-100 min-vh-100 p-4"
    >
      <h1 className="fw-bold">Guitar Chords Test</h1>
      <p className="fs-4 text-center">
        Test your musical skills recognizing correctly guitar chords
      </p>
      <Link to={routes.EXAMPLES} className="btn btn-primary px-3">
        Listen to examples
      </Link>
      <Link to="" className="btn btn-primary px-5">
        Start Test
      </Link>
    </section>
  );
};

export default EntryPage;
