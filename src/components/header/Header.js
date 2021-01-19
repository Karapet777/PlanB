
import Button from '../button/Button'
import HomeContent from '../homeContent/HomeContent';
import Nav from '../nav/Nav';
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
        <header>
            <div className="header_content d-flex flex-row align-items-center justify-content-start ">
                <div className="logo">
                    <a href="/">The River</a>
                </div>
                <div className="ml-auto d-flex flex-row align-items-center justify-content-start" >
                    <Nav />
                    <Button style={book_button}>
                        Book Online
                    </Button>
                    <Button style={header_phone}>
                        <i className="fa fa-phone iPhone" ></i>
                        <span> 0183-12345678</span>
                    </Button>
                </div>
            </div>
          <HomeContent />
        </header>
    )
}

export default Header