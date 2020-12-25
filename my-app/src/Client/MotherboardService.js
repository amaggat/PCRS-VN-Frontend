import axios from 'axios';

const MAIN_REST_API_URL = '/api/mainboard';

class Service {
    static setMotherboard2List(motherboard) {
        var minMotherboard = motherboard
        minMotherboard.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        motherboard.priceList?.map(e => {
            if (e.price < minMotherboard.price) {
                minMotherboard.img = e.img
                minMotherboard.logo = e.logo
                minMotherboard.link = e.link
                minMotherboard.price = e.price
            }
        })

        delete minMotherboard.priceList
        console.log(minMotherboard)

        localStorage.setItem('motherboard', JSON.stringify(minMotherboard));
        window.location.replace('/list');
    }

    static getMotherboards() {
        return axios.get(MAIN_REST_API_URL);
    }

    static getMotherboardbyID(id) {
        return axios.get(MAIN_REST_API_URL+'/'+id)
    }

    static getMotherboardbyName(name) {
        return axios.get(MAIN_REST_API_URL+'/find/name='+name)
    }


    static getMotherboardbySocket(size) {
        return axios.get(MAIN_REST_API_URL+'/find/size='+size)
    }

    static getMotherboardbyManufacturer(manufacturer) {
        return axios.get(MAIN_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default Service;