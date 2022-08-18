import axios from 'axios';
import { API_URL } from './config';

const fromApiResponseToUser = apiResponse => {
  const { data = [] } = apiResponse;

  return data;
};

const getProducts = async () => {
  const apiURL = `${API_URL}/api/products`;

  return await axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponseToUser);
};

export default getProducts;
