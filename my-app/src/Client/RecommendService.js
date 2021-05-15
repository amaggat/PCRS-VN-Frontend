import axios from 'axios';

const RECOMMEND_API_URL = '/api/recommend'

export const getRecommendation = (type, productId) => {
    const result = axios({
        method: 'GET',
        url: `${RECOMMEND_API_URL}/${type}/${productId}`
    });

    return result;
}