import axios from 'axios';

const RAM_REST_API_URL = '/api/ram';

class MemoryService {
    static setMemory2List(ram) {
        var minRam = ram
        minRam.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        ram.priceList?.map(e => {
            if (e.price < minRam.price) {
                minRam.img = e.img
                minRam.logo = e.logo
                minRam.link = e.link
                minRam.price = e.price
            }
        })

        delete minRam.priceList
        console.log(minRam)

        localStorage.setItem('memory', JSON.stringify(minRam));
        window.location.replace('/list');
    }

    static getMemorys() {
        return axios.get(RAM_REST_API_URL);
    }

    static getMemorybyID(id) {
        return axios.get(RAM_REST_API_URL+'/'+id)
    }

    static getMemorybyName(name) {
        return axios.get(RAM_REST_API_URL+'/find/name='+name)
    }


    static getMemorybySize(size) {
        return axios.get(RAM_REST_API_URL+'/find/size='+size)
    }

    static getMemorybyManufacturer(manufacturer) {
        return axios.get(RAM_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default MemoryService;