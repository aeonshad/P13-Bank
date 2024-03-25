import store from '../app/store';

/**
 * Service Profil
 * @description Un service fournissant des méthodes pour la gestion du profil utilisateur.
 * Permet de récupérer et de mettre à jour les informations du profil utilisateur.
 */
class ProfilService {
    /**
     * Récupération du profil utilisateur
     * @param {string} jwt - Le token JWT de l'utilisateur.
     * @returns {Promise<boolean>} Une promesse résolue avec un booléen indiquant si la récupération du profil a réussi.
     */
    static profil(jwt) {
        return fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.body && data.body.firstName && data.body.lastName) {
                    store.dispatch({ type: 'user/setFirstName', payload: data.body.firstName });
                    store.dispatch({ type: 'user/setLastName', payload: data.body.lastName });
                    console.log(data);
                    return true;
                } else {
                    return false;
                }
            });
    }

    /**
     * Mise à jour du profil utilisateur
     * @param {string} firstName - Le prénom de l'utilisateur.
     * @param {string} lastName - Le nom de famille de l'utilisateur.
     * @param {string} jwt - Le token JWT de l'utilisateur.
     * @returns {Promise<boolean>} Une promesse résolue avec un booléen indiquant si la mise à jour du profil a réussi.
     */
    static updateProfil(firstName, lastName, jwt) {
        return fetch(`http://localhost:3001/api/v1/user/profile`, {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName }),
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.body && data.body.firstName && data.body.lastName) {
                    store.dispatch({ type: 'user/setFirstName', payload: data.body.firstName });
                    store.dispatch({ type: 'user/setLastName', payload: data.body.lastName });
                } else {
                    return false;
                }
            });
    }
}
export default ProfilService;
