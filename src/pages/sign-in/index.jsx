import { useState } from 'react';
import AuthentificationService from '../../services/authentification-service';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: { value: '' },
        password: { value: '' },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        AuthentificationService.login(form.username.value, form.password.value).then((isAuthenticated) => {
            if (!isAuthenticated) {
                console.log('Wrong credentials');
                return;
            }
            console.log('Good credentials');
            navigate('/user');
        });
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
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
