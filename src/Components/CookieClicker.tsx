import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME, TEMPERATURE } from "../Constants/Constants";

function CookieClicker() {
    useEffect(() => {
        document.title = "Cookie Clicker";
      });
    return(
        <>
        <h1>Cookie Clicker</h1>
        <p>
            <Link to={HOME}>Home</Link>
        </p>
        <p>
            <Link to={TEMPERATURE}>Temperature Checker</Link>
        </p>
        </>
    );
}

export default CookieClicker;