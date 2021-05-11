import axios from 'axios';

const RATING_API_URL = "/user/rating/"

export const RatingService = async ({ type, productId, userId, jwt, rating, favorite = true}) => {
  let productType;
  switch (type) {
    case 'cpu':
      productType = 'centralProcessor'
      break;
    case 'gpu':
      productType = 'graphicProcessor'
      break;
    case 'mainboard':
      productType = 'mainboard'
      break;
    case 'hdd':
      productType = 'hdd'
      break;
    case 'ssd':
      productType = 'ssd'
      break;
    case 'ram':
      productType = 'ram'
      break;
    case 'psu':
      productType = 'psu'
      break;
    default:
      break;
  }
  const data = {
    id: userId + '-' + productId,
    user: {
      id: userId,
    },
    [productType]: {
      id: productId,
    },
    rating,
    favorite,
  }

  const result = await axios({
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json',
    },
    url: RATING_API_URL + type,
    data
  });

  return result;

  // console.log(result)
}
