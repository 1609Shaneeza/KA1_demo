import { useEffect } from "react";
import { Link } from "react-router-dom";
import { COOKIE_COUNTER, HOME } from "../Constants/Constants";

function Temperature() {
    useEffect(() => {
      document.title = "Temperature Checker";
    });
  
    return (
      <nav>
        <p>
          <Link to={HOME}>Home</Link>
        </p>
        <p>
          <Link to={COOKIE_COUNTER}>Cookie Counter</Link>
        </p>
      </nav>
    );
  }

export default Temperature;