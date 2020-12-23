import axios from 'axios';

const CPU_REST_API_URL = '/api/cpu';
const POWER_REST_API_URL = '/api/powerSupplyUnits';

class Service {
    static getPowers() {
        return axios.get(POWER_REST_API_URL);
    }

    static getCPUs() {
        return axios.get(CPU_REST_API_URL);
    }

    static getCPUbyID(id) {
        return axios.get(CPU_REST_API_URL+'/'+id)
    }
}

export default Service;