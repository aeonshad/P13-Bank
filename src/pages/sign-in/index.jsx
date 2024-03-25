import { useState } from 'react';
import AuthentificationService from '../../services/authentification-service';
import { useNavigate, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Composant SignIn
 * @description Un composant représentant la page de connexion de l'utilisateur.
 * Affiche un formulaire de connexion et gère le processus d'authentification.
 * Redirige vers la page utilisateur une fois l'authentification réussie.
 * @returns {JSX.Element} Le contenu de la page de connexion.
 */
function SignIn() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);
    const [form, setForm] = useState({
        username: { value: '' },
        password: { value: '' },
    });
    const [message, setMessage] = useState('Vous êtes déconnecté.');

    // Redirige vers la page utilisateur si l'utilisateur est déjà connecté.
    if (auth.token) {
        return <Navigate to="/user" />;
    }

    // Fonction de soumission du formulaire de connexion.
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('👉 Tentative de connexion en cours ...');
        AuthentificationService.login(form.username.value, form.password.value).then((isAuthenticated) => {
            if (!isAuthenticated) {
                setMessage('🔐 Identifiant ou mot de passe incorrect.');
                return;
            }
            setMessage('✅ Vous êtes maintenant connecté !');
            navigate('/user');
        });
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <div className="form-message">{message}</div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={form.username.value}
                            onChange={(e) =>
                                setForm((form) => ({
                                    ...form,
                                    username: { value: e.target.value },
                                }))
                            }
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={form.password.value}
                            onChange={(e) =>
                                setForm((form) => ({
                                    ...form,
                                    password: { value: e.target.value },
                                }))
                            }
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
}

export default SignIn;
