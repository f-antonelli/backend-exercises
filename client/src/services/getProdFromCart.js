import axios from 'axios';

const fromApiResponseToUser = apiResponse => {
  const { data = [] } = apiResponse;

  return data;
};

const getProdFromCart = async id => {
  const apiURL = `http://localhost:8080/api/cart/${id}/products`;

  return await axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponseToUser);
};

export default getProdFromCart;
