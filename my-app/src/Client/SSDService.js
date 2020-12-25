import axios from 'axios';

const SSD_REST_API_URL = '/api/ssd';

class SSDService {
    static setSSD2List(ssd) {
        var min = ssd
        min.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        ssd.priceList?.map(e => {
            if (e.price < min.price) {
                min.img = e.img
                min.link = e.link
                min.price = e.price
                min.logo = e.logo
            }
        })

        delete min.priceList
        console.log(min)

        localStorage.setItem('ssd', JSON.stringify(min));
        window.location.replace('/list');
    }

    static getSSDs() {
        return axios.get(SSD_REST_API_URL);
    }

    static getSSDbyID(id) {
        return axios.get(SSD_REST_API_URL+'/'+id)
    }

    static getSSDbyName(name) {
        return axios.get(SSD_REST_API_URL+'/find/name='+name)
    }


    static getSSDbySize(size) {
        return axios.get(SSD_REST_API_URL+'/find/size='+size)
    }

    static getSSDbyManufacturer(manufacturer) {
        return axios.get(SSD_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default SSDService;