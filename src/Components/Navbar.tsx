import { Link } from "react-router-dom";
import { COOKIE_COUNTER, HOME, TEMPERATURE } from "../Constants/Constants";



function Navbar() {
    

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
              <Link to= {COOKIE_COUNTER} className="nav-link">Cookie Clicker</Link>
              </li>
              <li className="nav-item">
              <Link to={TEMPERATURE} className="nav-link">Temperature Checker</Link>
              </li>
          </ul>
          <span className="navbar-text">
             cookie Counter: 1000
          </span>
          </div>
      </div>
      </nav>
      </>
  );
}

export default Navbar;