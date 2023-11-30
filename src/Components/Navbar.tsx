

function Navbar() {
    

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cookie Clicker</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Temperature Checker</a>
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