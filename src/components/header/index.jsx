import { Link } from 'react-router-dom';
import Logout from '../logout';
import { useSelector } from 'react-redux';
import { useState } from 'react';

/**
 * Composant Header
 * @description Un composant représentant l'en-tête de navigation de l'application.
 * Affiche le logo Argent Bank et les liens de navigation en fonction de l'état d'authentification.
 * Permet également de basculer le menu burger pour les appareils mobiles.
 * @returns {JSX.Element} Le contenu de l'en-tête de navigation.
 */
function Header() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const [burgerOpen, setBurgerOpen] = useState(false);

    // Fonction pour basculer le menu burger
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
                // Si l'utilisateur est authentifié
                <div className="main-nav-content" id={burgerOpen ? 'active' : ''}>
                    <Link to="/user" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        {user.firstName}
                    </Link>
                    <Logout />
                </div>
            ) : (
                // Si l'utilisateur n'est pas authentifié
                <div className="main-nav-content" id={burgerOpen ? 'active' : ''}>
                    <Link to="/signin" className="main-nav-item">
                        <i className="fa-solid fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
            {/* Bouton du menu hamburger pour les appareils mobiles */}
            <div className={burgerOpen ? 'icons-burger-active' : 'icons-burger'} onClick={toggleBurger}>
                &#9776;
            </div>
        </nav>
    );
}
export default Header;
