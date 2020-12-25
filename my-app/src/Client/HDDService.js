import axios from 'axios';

const HDD_REST_API_URL = '/api/hdd';

class HDDService {
    static setHDD2List(hdd) {
        var min = hdd
        min.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        hdd.priceList?.map(e => {
            if (e.price < min.price) {
                min.img = e.img
                min.logo = e.logo
                min.link = e.link
                min.price = e.price
            }
        })

        delete min.priceList
        console.log(min)

        localStorage.setItem('hdd', JSON.stringify(min));
        window.location.replace('/list');
    }

    static getHDDs() {
        return axios.get(HDD_REST_API_URL);
    }

    static getHDDbyID(id) {
        return axios.get(HDD_REST_API_URL+'/'+id)
    }

    static getHDDbyName(name) {
        return axios.get(HDD_REST_API_URL+'/find/name='+name)
    }


    static getHDDbySize(size) {
        return axios.get(HDD_REST_API_URL+'/find/size='+size)
    }

    static getHDDbyManufacturer(manufacturer) {
        return axios.get(HDD_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default HDDService;