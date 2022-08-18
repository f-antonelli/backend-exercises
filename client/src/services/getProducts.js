import axios from 'axios';

const fromApiResponseToUser = apiResponse => {
  const { data = [] } = apiResponse;

  return data;
};

const getProducts = async () => {
  const apiURL = `http://localhost:8080/api/products`;

  return await axios
    .get(apiURL)
    .catch(function (error) {
      console.log(error);
    })
    .then(fromApiResponseToUser);
};

export default getProducts;
