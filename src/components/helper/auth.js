import axios from 'axios';

class Auth {

    async login(callback, username, password) {
        const instance = axios.create({
            baseURL: "http://localhost:8080/api/",
            headers: {'Content-Type': 'Application/Json'},
            validateStatus: (status) => {return status === 200}
        });

        instance.post('login', {username, password} )
        .then((response) => {
            const token = response.headers['authorization'];
            callback(token);
        })
    }

    logout(callback) {
        this.authenticated = false;

    }
}

export default new Auth()
