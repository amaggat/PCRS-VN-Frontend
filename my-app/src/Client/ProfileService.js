import axios from 'axios';

const PROFILE_REST_API_URL = '/api/post';

class Service {
    static getProfiles() {
        return axios.get(PROFILE_REST_API_URL);
    }

    static getProfilebyID(id) {
        console.log(PROFILE_REST_API_URL+'/'+id)
        return axios.get(PROFILE_REST_API_URL+'/'+id);
    }
}

export default Service;