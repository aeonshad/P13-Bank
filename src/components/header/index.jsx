import { Link } from 'react-router-dom';
import Logout from '../logout';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Header() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    };

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            {auth.token ? (
                <div className="main-nav-content" id={burgerOpen ? 'active' : ''}>
                    <Link to="/user" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        {user.firstName}
                    </Link>
                    <Logout />
                </div>
            ) : (
                <div className="main-nav-content" id={burgerOpen ? 'active' : ''}>
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
            <div className={burgerOpen ? 'icons-burger-active' : 'icons-burger'} onClick={toggleBurger}>
                &#9776;
            </div>
        </nav>
    );
}
export default Header;
