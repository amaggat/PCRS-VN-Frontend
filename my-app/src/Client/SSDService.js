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

    static getSSDbyID(id) {
        return axios.get(SSD_REST_API_URL+'/'+id)
    }

    static getSearchSSD({searchList={}, pageNumber=0, pageSize=20}) {
        var request = SSD_REST_API_URL+'?'
        request += 'page='+ pageNumber + '&size=' + pageSize;
        // console.log(searchList)

        // eslint-disable-next-line array-callback-return
        Object.entries(searchList).map(e => {
            if(e[1] !== "") {
                request += '&' + e[0] + "=" + e[1] + '&'
            }
        })

        console.log(request);
        return axios.get(request)
    }

}

export default SSDService;