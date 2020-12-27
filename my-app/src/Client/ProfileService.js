import axios from 'axios';

const PROFILE_REST_API_URL = '/api/post';

class Service {
    static getProfiles() {
        return axios.get(PROFILE_REST_API_URL);
    }

    static getProfilebyID(id) {
        console.log(PROFILE_REST_API_URL+'/'+id)
        return axios.get(PROFILE_REST_API_URL+'/'+id);
    }

    static getPostsbyID(id) {
        return axios.get(PROFILE_REST_API_URL.concat('/',id,'/feedbacks'));
    }

    static postFeedback(id, details) {
        const date = new Date();
        return axios({
            method: 'POST',
            url: '/api/feedbacks',
            headers: {
                'Content-Type': 'application/json'
            }, 
            data: {
                creationtime: date.toLocaleDateString(),
                name: 'Anonymous',
                details: details,
                post: {
                    id,
                }
            }
        })
    }
}

export default Service;