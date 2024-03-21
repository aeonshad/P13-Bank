import { useState } from 'react';
import AuthentificationService from '../../services/authentification-service';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: { value: '' },
        password: { value: '' },
    });
    const [message, setMessage] = useState('Vous êtes déconnecté.');

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
