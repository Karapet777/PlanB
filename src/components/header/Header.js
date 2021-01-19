
import Button from '../button/Button'
import './Header.scss'

const Header = () => {
    const book_button = {
        width: "152px",
        marginLeft: "45px",
    };
    const header_phone = {
        width: "190px",
        marginLeft: "14px",
    };
    return (
        <div className="header_content d-flex flex-row align-items-center justify-content-start ">
            <div className="logo">
                <a href="/">The River</a>
            </div>

            <div className="ml-auto d-flex flex-row align-items-center justify-content-start" >
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
                <Button style={book_button}>
                    Book Online
                </Button>
                <Button style={header_phone}>
                    <i className="fa fa-phone iPhone" ></i>
                    <span> 0183-12345678</span>
                </Button>

            </div>
        </div>
    )
}

export default Header