import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <section className="section">
        <h1>About Page</h1>
        <p>Some about us text</p>
        <Link to="/" className="btn">
          Go back Home
        </Link>
      </section>
    </>
  );
}

export default About;
