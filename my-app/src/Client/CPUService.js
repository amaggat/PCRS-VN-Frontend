import axios from 'axios';

const CPU_REST_API_URL = '/api/cpu';
const POWER_REST_API_URL = '/api/powerSupplyUnits';

class Service {
    static setCPU2List(cpu) {
        var minCPU = cpu
        minCPU.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        cpu.priceList?.map(e => {
            if (e.price < minCPU.price) {
                minCPU.logo = e.logo
                minCPU.img = e.img
                minCPU.link = e.link
                minCPU.price = e.price
            }
        })

        delete minCPU.priceList
        console.log(minCPU)

        localStorage.setItem('cpu', JSON.stringify(minCPU));
        window.location.replace('/list');
    }

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