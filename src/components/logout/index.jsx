import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Logout() {
    const dispatch = useDispatch();

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
