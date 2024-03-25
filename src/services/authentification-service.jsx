import store from '../app/store';

/**
 * Service d'authentification
 * @description Un service fournissant une méthode pour l'authentification de l'utilisateur.
 * Permet à l'utilisateur de se connecter et de vérifier son statut d'authentification.
 */
class AuthentificationService {
    /**
     * Fonction de connexion
     * @param {string} email - L'adresse e-mail de l'utilisateur.
     * @param {string} password - Le mot de passe de l'utilisateur.
     * @returns {Promise<boolean>} Une promesse résolue avec un booléen indiquant si la connexion a réussi.
     */
    static login(email, password) {
        return fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.body && data.body.token) {
                    store.dispatch({ type: 'auth/setUserJwt', payload: data.body.token });
                    return true;
                } else {
                    return false;
                }
            });
    }
}
export default AuthentificationService;
