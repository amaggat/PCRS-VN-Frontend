import axios from 'axios';

const RAM_REST_API_URL = '/api/ram';

class Service {
    static getPowers() {
        return axios.get(RAM_REST_API_URL);
    }

    static getPowerbyName(name) {
        return axios.get(RAM_REST_API_URL+'/find/name='+name)
    }

    static getPowerbyID(id) {
        return axios.get(RAM_REST_API_URL+'/'+id)
    }

    static getPowerbySize(size) {
        return axios.get(RAM_REST_API_URL+'/find/size='+size)
    }

    static getPowerbyManufacturer(manufacturer) {
        return axios.get(RAM_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default Service;