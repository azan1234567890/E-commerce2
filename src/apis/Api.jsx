import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const baseUrl2 = "https://202.165.233.190:7156/api"
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
// export const getAuth2 = () => {
//   return axios({
//     url: `${baseUrl2}/Auth/Authenticate`,
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: { 
//       username: 'basit@gmail.com',
//       password: '12345678',
//     },
//   });
// };

export default ProductApis;
