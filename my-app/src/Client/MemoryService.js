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

    static getMemorybyID(id) {
        return axios.get(RAM_REST_API_URL+'/'+id)
    }

    static getSearchMemory({searchList={}, pageNumber=0, pageSize=20}) {
        var request = RAM_REST_API_URL+'?'
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

export default MemoryService;