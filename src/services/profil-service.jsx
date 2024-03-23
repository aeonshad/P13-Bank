class ProfilService {
    static firstname = '';
    static lastname = '';
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
                    console.log(data);
                    this.firstname = data.body.firstName;
                    this.lastname = data.body.lastName;
                    return true;
                } else {
                    return false;
                }
            });
    }
}
export default ProfilService;
