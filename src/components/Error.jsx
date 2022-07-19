import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <section className="section">
        <h2>Error 404</h2>
        <p>Page not found</p>
        <Link to="/" className="btn">
          Go back home
        </Link>
      </section>
    </>
  );
}

export default Error;
