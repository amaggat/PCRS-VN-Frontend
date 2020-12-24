import axios from 'axios';

const POWER_REST_API_URL = '/api/psu';

class Service {
    static getPowers() {
        return axios.get(POWER_REST_API_URL);
    }

    static getPowerbyName(name) {
        return axios.get(POWER_REST_API_URL+'/find/name='+name)
    }

    static getPowerbyID(id) {
        return axios.get(POWER_REST_API_URL+'/'+id)
    }

    static getPowerbySize(min, max) {
        return axios.get(POWER_REST_API_URL+'/find/size='+min+'-'+max)
    }

    static getPowerbyManufacturer(manufacturer) {
        return axios.get(POWER_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default Service;