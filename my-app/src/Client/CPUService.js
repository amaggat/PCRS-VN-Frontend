import axios from 'axios';

const CPU_REST_API_URL = '/api/cpu';

class Service {
    static setCPU2List(cpu) {
        var minCPU = cpu
        minCPU.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        cpu.priceList?.map(e => {
            if (e.price < minCPU.price) {
                minCPU.logo = e.logo
                minCPU.img = e.img
                minCPU.link = e.link
                minCPU.price = e.price
            }
        })

        delete minCPU.priceList
        // console.log(minCPU)

        localStorage.setItem('cpu', JSON.stringify(minCPU));
        window.location.replace('/list');
    }

    static getCPUbyID(id) {
        return axios.get(CPU_REST_API_URL+'/'+id)
    }

    static getSearchCPU({searchList={}, pageNumber=0, pageSize=20}) { 
        var request = CPU_REST_API_URL+'?'
        request += 'page='+ pageNumber + '&size=' + pageSize;
        // eslint-disable-next-line array-callback-return
        Object.entries(searchList).map(e => {
            if(e[1] !== "") {
                request += '&' + e[0] + "=" + e[1] + '&'
            }
        })

        console.log("REQUEST", request);
        return axios.get(request)
    }
}

export default Service;