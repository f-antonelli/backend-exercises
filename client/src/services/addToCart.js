import axios from 'axios';
import { API_URL } from './config';

const addToCart = async (id, product) => {
  const apiURL = `${API_URL}/api/cart/${id}/products`;

  return await axios
    .post(apiURL, product)
    .catch(function (error) {
      console.log(error);
    })
    .then(res => console.log(res.data.message));
};

export default addToCart;
