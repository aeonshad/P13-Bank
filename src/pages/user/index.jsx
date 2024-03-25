import { useEffect, useState } from 'react';
import ProfilService from '../../services/profil-service';
import { useSelector } from 'react-redux';

/**
 * Composant User
 * @description Un composant représentant la page du profil utilisateur.
 * Affiche les informations du profil utilisateur et permet la modification du prénom et du nom.
 * Redirige vers la page de connexion si l'utilisateur n'est pas authentifié.
 * @returns {JSX.Element} Le contenu de la page de profil utilisateur.
 */
function User() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const [isForm, setIsForm] = useState(false);
    const [form, setForm] = useState({
        firstName: { value: '' },
        lastName: { value: '' },
    });

    // Charge le profil utilisateur lors de l'authentification.
    useEffect(() => {
        if (auth.token) {
            ProfilService.profil(auth.token);
        }
    }, [auth.token]);

    // Met à jour le formulaire lorsque les informations de l'utilisateur changent.
    useEffect(() => {
        setForm({
            firstName: { value: user.firstName },
            lastName: { value: user.lastName },
        });
    }, [user.firstName, user.lastName]);

    // Fonction de soumission du formulaire de mise à jour du profil.
    const handleSubmit = (e) => {
        e.preventDefault();
        ProfilService.updateProfil(form.firstName.value, form.lastName.value, auth.token);
        setIsForm(false);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {isForm ? (
                        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
                            <div className="user-form-content">
                                <label htmlFor="firstName"></label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={form.firstName.value}
                                    onChange={(e) =>
                                        setForm((form) => ({
                                            ...form,
                                            firstName: { value: e.target.value },
                                        }))
                                    }
                                />
                                <label htmlFor="lastName"></label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={form.lastName.value}
                                    onChange={(e) =>
                                        setForm((form) => ({
                                            ...form,
                                            lastName: { value: e.target.value },
                                        }))
                                    }
                                />
                            </div>

                            <div className="user-form-content">
                                <button type="submit" className="user-form-btn">
                                    Save
                                </button>
                                <button type="button" className="user-form-btn" onClick={() => setIsForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        user.firstName + ' ' + user.lastName + ' !'
                    )}
                </h1>
                {isForm ? (
                    ''
                ) : (
                    <button className="edit-button" onClick={() => setIsForm(true)}>
                        Edit Name
                    </button>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default User;
