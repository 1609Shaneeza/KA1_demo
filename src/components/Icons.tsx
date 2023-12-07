import { Link } from "react-router-dom";
import { CONTACTUS, HOME, NEWS } from "../Constants/Constants";

function Navbar () {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to={HOME} className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
              <Link to= {CONTACTUS} className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
              <Link to={NEWS} className="nav-link">News</Link>
              </li>
              </ul>
              </div>
              </div>
              </nav>
        </>
    )
}

export default Navbar;