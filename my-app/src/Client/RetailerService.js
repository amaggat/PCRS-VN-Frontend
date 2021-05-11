import axios from 'axios';

const RETAILER_API_URL = '/api/retailer';

export const RetailerService = async () => {
  const result = await axios({
    method: 'GET',
    url: RETAILER_API_URL,
  });

  return result;
}