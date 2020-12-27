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

    static getPowerbyID(id) {
        return axios.get(POWER_REST_API_URL+'/'+id)
    }

    static getSearchPower({searchList={}, pageNumber=0, pageSize=20}) {
        var request = POWER_REST_API_URL+'?'
        request += 'page='+ pageNumber + '&size=' + pageSize;
        // console.log(searchList)

        // eslint-disable-next-line array-callback-return
        Object.entries(searchList).map(e => {
            if(e[1] !== "") {
                request += '&' + e[0] + "=" + e[1] + '&'
            }
        })

        // console.log(request);
        return axios.get(request)
    }

}

export default Service;