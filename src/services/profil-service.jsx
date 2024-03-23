import store from '../app/store';

class ProfilService {
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
