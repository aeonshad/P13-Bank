class AuthentificationService {
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
                    return true;
                } else {
                    return false;
                }
            });
    }
}
export default AuthentificationService;
