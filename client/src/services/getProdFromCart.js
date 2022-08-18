import axios from 'axios';
import { API_URL } from './config';

const fromApiResponseToUser = apiResponse => {
  const { data = [] } = apiResponse;

  return data;
};

const getProdFromCart = async id => {
  const apiURL = `${API_URL}/api/cart/${id}/products`;

  return await axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponseToUser);
};

export default getProdFromCart;
