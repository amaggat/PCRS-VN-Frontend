import axios from 'axios';

const GPU_REST_API_URL = '/api/gpu';

class Service {
    static setGPU2List(GPU) {
        var minGPU = GPU
        minGPU.price = 10000000000
        
        // eslint-disable-next-line array-callback-return
        GPU.priceList?.map(e => {
            if (e.price < minGPU.price) {
                minGPU.img = e.img
                minGPU.logo = e.logo
                minGPU.link = e.link
                minGPU.price = e.price
            }
        })

        delete minGPU.priceList
        console.log(minGPU)

        localStorage.setItem('video-card', JSON.stringify(minGPU));
        window.location.replace('/list');
    }

    static getGPUbyID(id) {
        return axios.get(GPU_REST_API_URL+'/'+id)
    }

    static getSearchVideocard({searchList={}, pageNumber=0, pageSize=20}) {
        var request = GPU_REST_API_URL+'?'
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