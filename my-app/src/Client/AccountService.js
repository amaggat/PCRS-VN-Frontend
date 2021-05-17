import axios from 'axios';
import Cookies from 'js-cookie';

const LOGIN_API_URL = '/api/login'
const REGISTER_API_URL = '/api/register'
const ADDPC_API_URL = '/user/addPc'
const BUILD_COLLECTION_API_URL = '/api/user'


export const LoginService = async ({ username, password }) => {
  const result = await axios({
    method: 'POST',
    url: LOGIN_API_URL,
    'Content-Type': 'application/json',
    data: {
      username,
      password
    }
  });
  return result;
}

export const RegisterService = async ({ username, password, name, email }) => {
  const result = await axios({
    method: "POST",
    url: REGISTER_API_URL,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      username,
      password,
      name,
      mail: email
    }
  });

  return result;
}

export const AddPCProfileService = async ({
  name,
  payload
}) => {
  const jwt = Cookies.get('jwt') || '';
  const userId = Cookies.get('userId') || '';

  const data = {
    category: {
      id: 0
    },
    user: {
      id: userId
    },
    name,
    ...payload
  }

  const result = await axios({
    method: 'POST',
    url: ADDPC_API_URL,
    headers: {
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    data
  });

  return result;
}

export const getUserBuilds = async () => {
  const userId = Cookies.get('userId');
  const result = await axios({
    method: 'GET',
    url: `${BUILD_COLLECTION_API_URL}/${userId}/pcprofile`,
    headers: {
      // 'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    }
  });

  return result;
}