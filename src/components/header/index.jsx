import { Link } from 'react-router-dom';
import Logout from '../logout';
import { useSelector } from 'react-redux';

function Header() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {auth.token ? (
                <div>
                    <Link to="/user" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        {user.firstName}
                    </Link>
                    <Logout />
                </div>
            ) : (
                <div>
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    );
}
export default Header;
