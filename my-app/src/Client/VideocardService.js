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

    static getGPUs() {
        return axios.get(GPU_REST_API_URL);
    }

    static getGPUbyID(id) {
        return axios.get(GPU_REST_API_URL+'/'+id)
    }

    static getGPUbyName(name) {
        return axios.get(GPU_REST_API_URL+'/find/name='+name)
    }


    static getGPUbyChipset(size) {
        return axios.get(GPU_REST_API_URL+'/find/chipset='+size)
    }

    static getGPUbyVram(size) {
        return axios.get(GPU_REST_API_URL+'/find/vram='+size)
    }

    static getGPUbyManufacturer(manufacturer) {
        return axios.get(GPU_REST_API_URL+'/find/manufacturer='+manufacturer)
    }

}

export default Service;