import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/**
 * Composant Logout
 * @description Un composant représentant le lien de déconnexion de l'utilisateur.
 * Permet à l'utilisateur de se déconnecter en dispatchant des actions Redux pour effacer les données d'authentification.
 * @returns {JSX.Element} Le lien de déconnexion.
 */
function Logout() {
    const dispatch = useDispatch();

    // Fonction de gestion de la déconnexion
    const handleLogout = () => {
        dispatch({ type: 'auth/setUserJwt', payload: null });
        dispatch({ type: 'user/setFirstName', payload: null });
        dispatch({ type: 'user/setLastName', payload: null });
    };

    return (
        <Link className="main-nav-item" to="/" onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Sign out
        </Link>
    );
}

export default Logout;
