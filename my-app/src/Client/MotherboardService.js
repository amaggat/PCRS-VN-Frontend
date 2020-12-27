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

    static getMotherboardbyID(id) {
        return axios.get(MAIN_REST_API_URL+'/'+id)
    }

    static getSearchMotherboard({searchList={}, pageNumber=0, pageSize=20}) {
        var request = MAIN_REST_API_URL+'?'
        
        if(Object.entries(searchList) !== {}) {}

        request += 'page='+ pageNumber + '&size=' + pageSize;
        console.log(searchList, pageNumber)

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