import './Nav.scss';

const Nav = () => {
    return (
        <nav className="main_nav">
            <ul className="d-flex flex-row align-items-start justify-content-start">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Room</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;