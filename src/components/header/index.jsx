import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                <Link to="/user" className="main-nav-item">
                    <i className="fa-solid fa-user-circle"></i>
                    Tony
                </Link>
                <Link to="/signin" className="main-nav-item">
                    <i className="fa-solid fa-user-circle"></i>
                    Sign In
                </Link>
                <Link to="/" className="main-nav-item">
                    <i className="fa-solid fa-user-circle"></i>
                    Sign Out
                </Link>
            </div>
        </nav>
    );
}
export default Header;
