import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const ProductApis = {
  getProduct: () => {
    return axios({
      url: `${baseUrl}/products`, 
      method: 'get',
    });
  },
};
export const getAuth = ({email,password}) => {
  return axios({
    url: `${baseUrl}/auth/login`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { 
      username: email,
      password: password,
    },
  });
};

export default ProductApis;
