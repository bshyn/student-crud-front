import axios from 'axios'

class Requests{

    constructor(token){
        this.instance = axios.create({
            baseURL: "http://localhost:8080/api/",
            headers: {'Content-Type': 'Application/Json', 'Authorization': token},
            validateStatus: (status) => {return status === 200}
        });
    }

    async getAllStudents(callback){
        await this.instance.get('students').then((response) => {
            callback(response.data);
        })
    }
}

export default Requests;