import React from "react";
import Hero from "../components/Globals/Hero";
import { Link } from "react-router-dom";
// export default function Default() {
//   return <div>hello from Default page</div>;
// }

export default function Default() {
  return (
    <Hero>
      <div className="col text-white text-uppercase text-center letter-spacing">
        <h2 className="display-1 text-custom">404</h2>
        <h3>page not found</h3>
        <Link to="/" className="mt-4 btn-custom">
          go home
        </Link>
      </div>
    </Hero>
  );
}
