import { useEffect } from "react";
import ParagraphPair from "./ParagraphPair";
// import { COOKIE_COUNTER, TEMPERATURE } from "../Constants/Constants";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Homepage() {
    useEffect(() => {
        document.title = "Home";
      });

    return (
        <>
        <h1>Key Assesment 2</h1>
        <Navbar/>
        <br></br>
        <ParagraphPair />
        </>
    );
}

export default Homepage;