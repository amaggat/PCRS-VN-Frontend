import axios from 'axios';

const POWER_REST_API_URL = '/api/psu';

class Service {
    static setPower2List(power) {
        var minPower = power
        minPower.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        power.priceList?.map(e => {
            if (e.price < minPower.price) {
                minPower.img = e.img
                minPower.logo = e.logo
                minPower.link = e.link
                minPower.price = e.price
            }
        })

        delete minPower.priceList
        console.log(minPower)

        localStorage.setItem('power', JSON.stringify(minPower));
        window.location.replace('/list');
    }

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