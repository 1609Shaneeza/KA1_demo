function Navbar () {
    return (
        <>
        <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">HomePage</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
        </li>
        </ul>
        </>
    )
}

export default Navbar;