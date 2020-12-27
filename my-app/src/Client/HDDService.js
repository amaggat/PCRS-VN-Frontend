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

    static getHDDbyID(id) {
        return axios.get(HDD_REST_API_URL+'/'+id)
    }

    static getSearchHDD({searchList={}, pageNumber=0, pageSize=20}) {
        var request = HDD_REST_API_URL+'?'
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

export default HDDService;